const { productModel } = require('../model/product');

const productRouter = require('express').Router();

productRouter.post("/create", async(req , res , next) => {
    try {
        const {name , dec , price} =req.body;
        const newProduct = new productModel({name , dec , price});
        await newProduct.save();
        return res.json({message: "a new product created", product: newProduct})
    } catch (error) {
        nexte(error)
    }
})

module.exports = {
    productRouter,
};