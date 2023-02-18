import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const menuSchema = new Schema(
    {
        nom: {
            type: String,
            required: true
        },
        paysOrigine: {
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            required: true
        },
        updateAt: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('Menu', menuSchema);