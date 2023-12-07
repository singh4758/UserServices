import express, {Express} from 'express';


class Server {
    private app: Express;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    public start(): void {
        this.app.listen(this.port, (): void => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

export default Server;
