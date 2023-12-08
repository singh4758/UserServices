import axios from "axios";
import {configs} from "../configurations/configs";
import {IScript} from "./IScript";
import ItemsService from "../services/items/items.service";

class Scripts implements IScript {
    private pageNo: number = 0;

    public async start(): Promise<void> {
        try {
            const url: string = `${configs.apiUrl}?page=${this.pageNo}&limit=${configs.batches}`;
            const { data: { results } } = await axios.get(url);
            await ItemsService.bulkInsertUser(results);
            this.pageNo++;
        } catch (e) {
            console.log("Error found", e)
        }
    }
}

export default Scripts;
