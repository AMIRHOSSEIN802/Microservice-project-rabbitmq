const { isAuthenticated } = require('../../isAuthenticated');
const { pushToQueue } = require('../config/rabbitmq');
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
productRouter.post("/buy" ,isAuthenticated, async(req, res , next) => {
    try {
        const {productIDs = []} = req.body;
        const products = await productModel.find({_id: {$in: productIDs}});
        const {email} = req.user;
        await pushToQueue("ORDER" , {products , userEmail: email})
    } catch (error) {
        next(error)
    }
})
module.exports = {
    productRouter,
};