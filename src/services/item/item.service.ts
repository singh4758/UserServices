import itemModel from "./item.model";
import {IItem} from "../../interfaces/IItem";

class ItemService {

    private static instance: ItemService;

    public static getInstance(): ItemService {
        if(!this.instance) {
            this.instance = new ItemService();
        }
        return this.instance;
    }
    public async saveItem(item: IItem): Promise<IItem> {
        return itemModel.create(item);
    }

    public async saveItems(items: IItem[]): Promise<IItem[]> {
        return itemModel.insertMany(items);
    }

    public async itemList(limit: number, page: number, filterOption: any, sort: string): Promise<IItem[]> {
        const query = Object.keys(filterOption).reduce((previous, current) =>{
            return ({...previous, ...(filterOption[current] ? {[current]: filterOption[current]}: {} ) });
        }, {});
        
        return itemModel.find(query).sort({ [sort]: 1 }).limit(limit).skip(limit * (page - 1));
    }

    public async itemsCount(filterOption?: any): Promise<number> {
        const query = Object.keys(filterOption).reduce((previous, current) =>{
            return ({...previous, ...(filterOption[current] ? {[current]: filterOption[current]}: {} ) });
        }, {});
        return itemModel.countDocuments(query);
    }
}

export default ItemService.getInstance();
