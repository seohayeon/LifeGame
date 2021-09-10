import { Document, Schema, model } from 'mongoose';


export interface IUser extends Document {
    hash: number;
    username: string;
    email: string | null;
    password: string | null;
    date: Date;
};

export const UserSchema = new Schema({
  hash: {
        type: Number,
        unique: true,
        required:true
    },
    username: {
        type: String,
        unique: true,
        required:true
    },
    email: {
        type: String,
        unique: true,
        default:null
    },
    password: {
        type: String,
        default:null
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const User = model<IUser>('User', UserSchema);
export default User;