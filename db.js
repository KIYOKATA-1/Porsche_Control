const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://Kiyokata:nhZvEcjuqqeSQBi5@porsche.nfbkcin.mongodb.net/?retryWrites=true&w=majority&appName=PORSCHE';

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;



db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB connected successfully.');
});

module.exports = db;
