import {IScript} from "../interfaces/IScript";


class Scheduler {
    private readonly scheduleInterval: number;
    private readonly script: IScript;

    constructor(scheduleInterval: number, script: IScript) {
        this.scheduleInterval = scheduleInterval;
        this.script = script;
    }

    private sleep(ms: number): Promise<object> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async start(): Promise<void> {
        while(true) {
            await this.script.start();
            await this.sleep(this.scheduleInterval);
        }
    }
}

export default Scheduler;
