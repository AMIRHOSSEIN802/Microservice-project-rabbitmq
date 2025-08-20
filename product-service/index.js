const express = require('express');
const { productRouter } = require('./handler/product');
const app = express();
require('dotenv').config();
const {PORT} = process.env;
require("./config/mongoose.config")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/product" , productRouter)
app.use((req, res, next) => {
    return res.json({error: 'Not Found'});
})
app.use((error, req, res, next) => {
    return res.json({error: error.message});
})

app.listen(PORT , () => {
    console.log("product-service runing over port", PORT);
    
})