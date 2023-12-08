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

    public async itemList(limit: number, page: number, filterOption?: any): Promise<IItem[]> {
        const {
            name,
            gender,
            email,
            age,
            state,
            street,
            city,
            country
        } = filterOption || {};
        const query = {
            name,
            gender,
            email,
            age,
            address: {
                state,
                street,
                city,
                country
            },
        };
        return itemModel.find().limit(limit).skip(limit * (page - 1));
    }
}

export default ItemService.getInstance();
