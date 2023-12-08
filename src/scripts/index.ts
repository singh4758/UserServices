import {IScript} from "../interfaces/IScript";

class Scripts implements IScript {
    private pageNo: number = 0;

    public async start(): Promise<void> {
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([]);
                }, 5000)
            });
            console.log('aaaaaaaaaaaaaaaa', new Date().toTimeString())
            this.pageNo++;
        } catch (e) {
            console.log("Error found")
        }
    }
}

export default Scripts;
