import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {addToCart,removeFromCart,getCart} from '../controllers/cartController.js'

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart) // endpoint, middleware, add methode
cartRouter.delete("/remove",authMiddleware,removeFromCart)
cartRouter.get("/get",authMiddleware,getCart)

export default cartRouter;