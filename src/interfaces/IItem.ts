import {IAddress} from "./IAddress";

export interface IItem {
    gender: string;
    name: string;
    address: IAddress;
    email: string;
    age: string;
    picture: string;
    createdAt: Date;
}
