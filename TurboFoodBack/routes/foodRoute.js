import express from 'express';
import multer from 'multer'; // fournit des methodes pour generer des middleware pour upload des fichiers
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

// gestion des images
const storage = multer.diskStorage({
     destination:"uploads",
     filename:(req,file,callback)=>{
          return callback(null,`${Date.now()}${file.originalname}`) // renommer les img unique + extension
     }
})

const upload = multer({storage:storage}) // middleware pour stocker les img dans dossier upload

// POST request
foodRouter.post("/add",upload.single("image"),addFood) // endpoint, middleware, add methode
// Get 
foodRouter.get("/list",listFood)
// remove
foodRouter.post("/remove",removeFood)

export default foodRouter; // 2- config dans server.js