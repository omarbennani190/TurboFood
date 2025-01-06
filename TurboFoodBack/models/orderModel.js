import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
     userId: {type:String, require:true},
     items: {type:Array, require:true},
     amount: {type:Number, require:true},
     address: {type:Array, require:true},
     status: {type:String, default:"Food processing"},
     date: {type:Date, default:Date.now()},
     payment: {type:Boolean,default:false}
}) // to store empty object cartData when null

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema); // use model if already created else create new model

export default orderModel;