import mongoose from 'mongoose';
import itemSchema from "./item.schema";

const ItemModel = mongoose.model('Item', itemSchema);

export default ItemModel;
