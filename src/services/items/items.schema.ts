import mongoose from 'mongoose';
const { Schema } = mongoose;

const AddressSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    state:  {
        type: String,
        required: true,
    },
    country:  {
        type: String,
        required: true,
    },
    street:  {
        type: String,
        required: true,
    },
});

const itemSchema = new Schema({
    gender: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    address: {
        required: true,
        type: AddressSchema,
    },
    email: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: String,
    },
    picture: {
        required: true,
        type: String,
    },
    createdAt: {
        required: true,
        type: Date,
    },
});

export default itemSchema;
