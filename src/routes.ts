import {Router} from "express";
import { ItemRouter } from './controllers/index';

const router = Router();

router.use("/item", ItemRouter);

export default router;

