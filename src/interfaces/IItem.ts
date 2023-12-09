import {IAddress} from "./IAddress";

export interface IItem {
    gender: string;
    name: string;
    address: IAddress;
    email: string;
    age: number;
    picture: string;
    createdAt: Date;
}
