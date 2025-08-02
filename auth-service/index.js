const express = require('express');
const app = express();
require('dotenv').config();
const {PORT} = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    return res.json({error: 'Not Found'});
})
app.use((error, req, res, next) => {
    return res.json({error: error.message});
})