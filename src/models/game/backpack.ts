import { Document, Schema, model } from 'mongoose';


export interface IBackpack extends Document {
    
};



export const BackpackSchema = new Schema({

});

const Backpack = model<IBackpack>('Backpack', BackpackSchema);
export default Backpack;