import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name: {type:String, require:true},
     email: {type:String, require:true, unique:true},
     password: {type:String, require:true},
     cartData: {type:Object, default:{}},
},{minimize:false}) // to store empty object cartData when null

const userModel = mongoose.models.user || mongoose.model("user",userSchema) // use model if already created else create new model

export default userModel;