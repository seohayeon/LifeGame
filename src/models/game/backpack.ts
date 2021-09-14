import { Document, Schema, model } from 'mongoose';


export interface IBackpack extends Document {
    level?: number;
    item?:object;
};

var Item = new Schema({ name: String, count: Number });

export const BackpackSchema = new Schema({
    level: {
        type: Number,
        required:true,
        default:0
    },
    item:[Item]
});

const Backpack = model<IBackpack>('Backpack', BackpackSchema);
export default Backpack;