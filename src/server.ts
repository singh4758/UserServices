import * as bodyParser from 'body-parser';
import express, {Express} from 'express';
import mongoose from "mongoose";
import Scheduler from "./utils/Scheduler";
import Scripts from "./scripts";
import {configs} from "./configurations/configs";
import router from "./routes";


class Server {
    private readonly app: Express;

    constructor() {
        this.app = express();
    }

    private initJsonParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private intializeMongo(): void {
        mongoose.connect(configs.mongoUrl);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log("we're connected!")
        });
    }

    private initializeRouter(): void {
        this.app.use(configs.apiPrefix, router);
    }

    private intializeScript(): void {
        new Scheduler(configs.schedulerInterval, new Scripts()).start();
    }

    public bootstrap(): Server {
        this.intializeMongo();
        this.initializeRouter();
        this.initJsonParser();
        this.intializeScript();
        return this;
    }

    public start(): void {
        this.app.listen(configs.port, (): void => {
            console.log(`Server listening on port ${configs.port}`);
        });
    }
}

export default Server;
