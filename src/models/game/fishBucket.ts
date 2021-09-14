import { Document, Schema, model } from 'mongoose';


export interface IFishBucket extends Document {
    level?: number;
    item?:object;
};

var Item = new Schema({ name: String, weight: Number, level:Number});

export const FishBucketSchema = new Schema({
    level: {
        type: Number,
        required:true,
        default:0
    },
    item:[Item]
});

const FishBucket = model<IFishBucket>('FishBucket', FishBucketSchema);
export default FishBucket;