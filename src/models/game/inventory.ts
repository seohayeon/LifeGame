import { Document, Schema, model } from 'mongoose';


export interface IInventory extends Document {
    hash?: number;
    level?: number;
    item?:object;
    fishBucket?:any;
};

var Item = new Schema({ name: String, count: Number });
var Fish = new Schema({ name: String, weight: Number, level:Number});

export const InventorySchema = new Schema({
    hash:{
        type:Number,
        unique: true,
        required:true
    },
    level: {
        type: Number,
        required:true,
        default:0
    },
    item:[Item],
fishBucket:[{
    name: String, 
    weight: Number, 
    level:Number,
    _id:false
}]
});

const Inventory = model<IInventory>('Iventory', InventorySchema);
export default Inventory;