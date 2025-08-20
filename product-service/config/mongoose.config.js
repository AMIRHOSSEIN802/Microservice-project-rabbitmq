 const mongoose = require('mongoose');

    const dbURI = 'mongodb://127.0.0.1:27017/product-service'; 

    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected product-service successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));