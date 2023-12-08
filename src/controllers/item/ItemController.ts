import {query, Request, Response} from 'express';
import ItemService from "../../services/item/item.service";

export class ItemController {
    public async fetchItemList(req: Request, res: Response) {
        try {
            const {limit = 10, page = 1 } = req.query;
            const items = await ItemService.itemList(parseInt(String(limit)), parseInt(String(page)));
            const itemCount = await ItemService.itemsCount();
            return res.send({ items, limit, page, total: itemCount });
        } catch (e) {
            console.error("Error", e);
        }
    }
}
