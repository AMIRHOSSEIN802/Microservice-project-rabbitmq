 const mongoose = require('mongoose');

    const dbURI = 'mongodb://127.0.0.1:27017/auth-service'; 

    mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));