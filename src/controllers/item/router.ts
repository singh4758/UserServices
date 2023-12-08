import express from "express";
import {ItemController} from "./ItemController";

const router = express.Router();
const itemController = new ItemController();

router.get("/list", itemController.fetchItemList);

export default router;
