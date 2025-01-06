import userModel from "../models/userModel.js"; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';


// login user
const loginUser = async (req,res) => {
     const {password,email} = req.body; //extraire les var du body de la req
     try {
          const user = await userModel.findOne({email}) // get email if available
          if(!user){
               return res.json({success:false, message:"User does not exist"})
          }
          
          const isMatch = await bcrypt.compare(password,user.password) // user pwd, pwd in DB
          if(!isMatch){
               return res.json({success:false, message:"Invalid credentials"})
          }
          // send token in response to the user 
          const token = createToken(user._id)
          res.json({success:true,token})
     } catch (error) {
          console.log(error);
          res.json({success:false, message:"Error in login"})
     }
}


const createToken = (id) => {
     return jwt.sign({id},process.env.JWT_SECRET) // encrypt data by id and config in .env and include .env in server.js
}

// register user
const registerUser = async (req,res) => {
     const {name,password,email} = req.body; //extraire les var du body de la req
     try {
          const exists = await userModel.findOne({email}) // checking if user already exists 
          if(exists){
               return res.json({success:false, message:"User already exists"})
          }
          // validating email format and strong password
          if(!validator.isEmail(email)){
               return res.json({success:false, message:"Please enter a valid email"})
          }
          if(password.length<8 && !validator.isStrongPassword(password)){
               return res.json({success:false, message:"Please enter a strong password"})
          }

          // hashing user password
          const salt = await bcrypt.genSalt(10) // genere 10 caracteres
          const hashedPassword = await bcrypt.hash(password,salt);

          // create user
          const newUser = new userModel({
               name:name,
               email:email,
               password:hashedPassword
          })
          
          const user = await newUser.save() // save user in DB
          // send token in response to the user 
          const token = createToken(user._id)
          res.json({success:true,token})

     } catch (error) {
          console.log(error);
          res.json({success:false, message:"Error in register"})
     }
}

export {loginUser,registerUser}