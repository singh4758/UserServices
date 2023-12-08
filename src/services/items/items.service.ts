import itemModel from "./item.model";
import {IItem} from "../../interfaces/IItem";

class ItemsService {

    private static instance: ItemsService;

    public static getInstance(): ItemsService {
        if(!this.instance) {
            this.instance = new ItemsService();
        }
        return this.instance;
    }
    public async createUser(item: IItem): Promise<IItem> {
        return itemModel.create(item);
    }

    public async bulkInsertUser(items: IItem[]): Promise<IItem[]> {
        return itemModel.insertMany(items);
    }

    public async usersList(limit: number, page: number, filterOption: any): Promise<IItem[]> {
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
        return itemModel.find(query).limit(limit).skip(limit * page);
    }
}

export default ItemsService.getInstance();
