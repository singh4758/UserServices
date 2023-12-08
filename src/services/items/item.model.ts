import mongoose from 'mongoose';
import itemSchema from "./items.schema";

const ItemModel = mongoose.model('Item', itemSchema);

export default ItemModel;
