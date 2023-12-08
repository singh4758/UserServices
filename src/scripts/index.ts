import axios from "axios";
import {configs} from "../configurations/configs";
import {IScript} from "./IScript";
import ItemService from "../services/item/item.service";

class Scripts implements IScript {
    private pageNo: number = 1;

    public async start(): Promise<boolean> {
        try {
            const url: string = `${configs.apiUrl}&page=${this.pageNo}&results=${configs.batches}`;
            const { data: { results } } = await axios.get(url);
            if(results.length === 0) {
                return false;
            }
            const data = await ItemService.saveItems(results);
            console.log(`Batch of page ${this.pageNo}. No of records ${data.length} inserted`);
            this.pageNo++;
            return true;
        } catch (e) {
            console.log("Error found", e)
            return true;
        }
    }
}

export default Scripts;
