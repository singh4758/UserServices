import dotenv from 'dotenv';
import {IConfigurations} from "./IConfigurations";

dotenv.config();

export const configs: IConfigurations = {
    apiUrl: process.env.API_URL || "",
    batches: parseInt(process.env.BATCHES || "5"),
    mongoUrl: process.env.MONGO_URL || "",
    schedulerInterval: parseInt(process.env.SCHEDULER_INTERVAL || "10000"),
    port: parseInt(process.env.PORT || "3000"),
    apiPrefix: process.env.API_PREFIX || "",
}
