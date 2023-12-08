import {IScript} from "../scripts/IScript";


class Scheduler {
    private readonly scheduleInterval: number;
    private readonly script: IScript;
    private moreData: boolean = true;

    constructor(scheduleInterval: number, script: IScript) {
        this.scheduleInterval = scheduleInterval;
        this.script = script;
    }

    private sleep(ms: number): Promise<object> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async start(): Promise<void> {
        while(this.moreData) {
            this.moreData = await this.script.start();
            await this.sleep(this.scheduleInterval);
        }
    }
}

export default Scheduler;
