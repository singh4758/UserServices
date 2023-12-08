import express, {Express} from 'express';
import mongoose from "mongoose";
import Scheduler from "./utils/Scheduler";
import Scripts from "./scripts";


class Server {
    private readonly app: Express;
    private readonly port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    private intializeMongo(): void {
        mongoose.connect('mongodb://localhost:27017/test');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log("we're connected!")
        });
    }

    public bootstrap(): Server {
        this.intializeMongo();
        new Scheduler(5000, new Scripts()).start();
        return this;
    }

    public start(): void {
        this.app.listen(this.port, (): void => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

export default Server;
