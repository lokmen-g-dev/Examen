import express from "express";
import { body } from "express-validator";



import { ajoute, getRest } from "../controllers/restaurant.js";

const router = express.Router();

router
  .route("/restaurants")
  .post(
  
    body("nom").isLength({ min: 3 , max: 30 }),
    body("tel").isNumeric(8),
    body("adresse").isLength({ min: 3 , max: 30 }),
    ajoute
  );



router
  .route("restaurants")
  .get(getRest);
  

export default router;
