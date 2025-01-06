import foodModel from "../models/foodModel.js";
import fs from "fs";     // node js filesystem

// add food item

const addFood = async (req,res) => {
     let image_filename = `${req.file.filename}`; // stocker les img uploader
     console.log(image_filename);
     
     // if (!req.file) {
     //      return res.status(400).json({ error: 'No file uploaded' });
     // }

     const food = new foodModel({
          name:req.body.name,
          description:req.body.description,
          price:req.body.price,
          category:req.body.category,
          image:image_filename
     })
     try {
          await food.save();
          res.json({success:true,message:"Food Added"});
     } catch (error) {
          console.log(error);
          res.json({success:false,message:"Error when adding food item"})
     }
}

// Food list
const listFood = async (req,res) => {
     try {
          const foods = await foodModel.find({})
          res.json({success:true,data:foods})
     } catch (error) {
          console.log(error);
          res.json({success:false,message:"Error when listing food item"})
     }
}

// remove food item
const removeFood = async (req,res) => {
     try {
          const food = await foodModel.findById(req.body.id);
          fs.unlink(`uploads/${food.image}`, ()=>{}) // delete from folder

          await foodModel.findByIdAndDelete(req.body.id); // delete from database
          res.json({success:true,message:"Food Removed"})
     } catch (error) {
          console.log(error);
          res.json({success:false,message:"Error when deleting food item"})
     }
}

export {addFood,listFood,removeFood} // 1-exporter objet en utilisant une route