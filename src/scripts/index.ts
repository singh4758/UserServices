import * as https from "https";
import {configs} from "../configurations/configs";
import {IScript} from "./IScript";

class Scripts implements IScript {
    private pageNo: number = 0;

    public async start(): Promise<void> {
        try {
            const url: string = `${configs.apiUrl}?page=${this.pageNo}&limit=${configs.batches}`;
            const data = await https.get(url);
            console.log(data);
            this.pageNo++;
        } catch (e) {
            console.log("Error found", e)
        }
    }
}

export default Scripts;
