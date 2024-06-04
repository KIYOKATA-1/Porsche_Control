const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Import DB module

const app = express();
const PORT = process.env.PORT || 5060;

app.use(cors());
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const mongoose = require('mongoose'); 
const UserSchema = new mongoose.Schema({
  userId: Number,
  username: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

const CounterSchema = new mongoose.Schema({
  _id: String,
  seq: {
    type: Number,
    default: 0
  }
});

const Counter = mongoose.model('Counter', CounterSchema);

async function getNextUserId() {
  const counter = await Counter.findByIdAndUpdate({_id: 'userId'}, {$inc: {seq: 1}}, {new: true, upsert: true});
  return counter.seq;
}

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(409).json({ message: "User already exists. Do you want to sign in instead?" });
      }

      const userId = await getNextUserId();
      const newUser = new User({ userId, username, password });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully", userId: newUser.userId });
  } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: "Server error: " + error.message });
  }
});

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && user.password === password) {
      res.send("User authenticated successfully");
    } else {
      res.status(401).send("Authentication failed: Incorrect username or password");
    }
  } catch (error) {
    res.status(500).send("Server error: " + error.message);
  }
});

app.get('/profile', async (req, res) => {
  const { userId } = req.query;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json({ username: user.username });
    } else {
      res.status(404).json({ error: "User not found" }); 
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" }); 
  }
});

app.put('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const { username } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "No user ID provided" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser && existingUser.userId !== Number(userId)) {
      return res.status(409).json({ error: "Username/Email already in use." });
    }

    const user = await User.findById(userId);
    if (user) {
      user.username = username;
      await user.save();
      res.status(200).json({ message: "Username updated successfully", username });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating username:", error);
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
