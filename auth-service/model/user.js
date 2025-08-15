const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
}, {timestamps: true});
const userModel = mongoose.model("user" , UserSchema);
module.exports = {
    userModel
}