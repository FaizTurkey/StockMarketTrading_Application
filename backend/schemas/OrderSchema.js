const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    // name: String,
    // price: Number,
    // percent:String,
    // isDown: Boolean,
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = { OrderSchema };