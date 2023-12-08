import { Request, Response } from 'express';
import ItemService from "../../services/item/item.service";

export class ItemController {
    public async fetchItemList(req: Request, res: Response) {
        try {
            const {limit = 10, page = 1 } = req.query;
            const data = await ItemService.itemList(parseInt(String(limit)), parseInt(String(page)));
            return res.send({ data });
        } catch (e) {
            console.error("Error", e);
        }
    }
}
