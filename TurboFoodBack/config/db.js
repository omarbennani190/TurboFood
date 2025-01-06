import mongoose from "mongoose";

export const connectDB = async() => {   // export pour acceder a server.js
     try {
          await mongoose.connect('mongodb+srv://omar686bd:MbfbO9sjcdNX9wT3@cluster0.dfwve.mongodb.net/react-114', {
              socketTimeoutMS: 0,          // Pas de timeout sur le socket pour garder la connexion ouverte
              connectTimeoutMS: 30000,     // Temps d'attente pour établir une connexion avant d'échouer
              autoIndex: false,            // Désactive la création d'index automatique, ce qui peut améliorer les performances en production
              retryWrites: true,              // Permet de réessayer les écritures en cas de défaillance
          });
          console.log("DB Connected");
      } catch (error) {
          console.error("Connection error:", error);
      }
  };