const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});


const UserSchema = new mongoose.Schema({
  username: String,
  password: String, 
});

const User = mongoose.model('User', UserSchema);


app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(409).json({ message: "User already exists. Do you want to sign in instead?" });
      }

      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
