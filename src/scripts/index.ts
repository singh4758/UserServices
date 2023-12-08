import axios from "axios";
import {configs} from "../configurations/configs";
import {IScript} from "./IScript";
import ItemsService from "../services/items/items.service";

class Scripts implements IScript {
    private pageNo: number = 1;

    public async start(): Promise<void> {
        try {
            const url: string = `${configs.apiUrl}?page=${this.pageNo}&limit=${configs.batches}`;
            const { data: { results } } = await axios.get(url);
            const data = await ItemsService.bulkInsertUser(results);
            console.log(`Batch of page ${this.pageNo}. No of records ${data.length} inserted`);
            this.pageNo++;
        } catch (e) {
            console.log("Error found", e)
        }
    }
}

export default Scripts;
