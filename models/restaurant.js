import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const resSchema = new Schema(
    {
       
        nom: {
            type: String,
            required: true
        },
        tel:{
           type:Number,
          required: true
        },
        adresse:{
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
);

export default model('Restaurant', resSchema);