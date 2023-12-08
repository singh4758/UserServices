import express, {Express} from 'express';
import mongoose from "mongoose";
import Scheduler from "./utils/Scheduler";
import Scripts from "./scripts";
import {configs} from "./configurations/configs";
import * as dotenv from 'dotenv';
dotenv.config()


class Server {
    private readonly app: Express;

    constructor() {
        this.app = express();
    }

    private intializeMongo(): void {
        mongoose.connect(configs.mongoUrl);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log("we're connected!")
        });
    }

    public bootstrap(): Server {
        this.intializeMongo();
        new Scheduler(configs.batches, new Scripts()).start();
        return this;
    }

    public start(): void {
        this.app.listen(configs.port, (): void => {
            console.log(`Server listening on port ${configs.port}`);
        });
    }
}

export default Server;
