import {IItem} from "./IItem";

export interface IPagination {
    total: number,
    limit: number,
    page: number,
    sortBy: string
    items: IItem[]
}
