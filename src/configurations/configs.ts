import dotenv from 'dotenv';
import {IConfigurations} from "./IConfigurations";

dotenv.config();

export const configs: IConfigurations = {
    apiUrl: process.env.API_URL || "",
    batches: parseInt(process.env.BATCHES || "500"),
    mongoUrl: process.env.MONGO_URL || "",
    port: parseInt(process.env.PORT || "3000")
}
