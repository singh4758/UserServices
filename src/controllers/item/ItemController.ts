import {Request, Response} from 'express';
import ItemService from "../../services/item/item.service";

export class ItemController {
    public async fetchItemList(req: Request, res: Response) {
        try {
            const {
                limit = 10,
                page = 1,
                name,
                email,
                age,
                sort = 'name',
            } = req.query as any;


            const items = await ItemService.itemList(
                limit,
                page,
                {name, age, email},
                sort,
            );
            const itemCount = await ItemService.itemsCount({name, age, email});
            return res.send({ items, limit, page, total: itemCount, sortBy: sort });
        } catch (e) {
            console.error("Error", e);
            res.status(500).send({message: "Internal server error"});
        }
    }
}
