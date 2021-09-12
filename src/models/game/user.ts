import { Document, Schema, model } from 'mongoose';


export interface IUser extends Document {
    name?: string;
    item?: object;
    exp?: number;
    level?: number;
    hp?: object;
    money?: number;
    house?: object;
    location?: string;
    fishingRod?: object;
    pickaxe?: object;
    ax?: object;
};

var Item = new Schema({ name: String, count: Number });

export const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required:true
    },
    item:[Item],    
    exp: {
        type:Number,
        default:0
    },
    level:{
        type:Number,
        default:1
    },
    hp:{
        current:{
            type:Number,
            default:100
        },
        max:{
            type:Number,
            default:100
        }
    },
    money:{
        type:Number,
        default:10000
    },
    house:{
        name:{
            type:String,
            default:"노숙자"
        },
        level:{
            type:Number,
            default:1
        }
    },
    location:{
        type:String,
        default:"집"
    },
    fishingRod:{
        name:{
            type:String,
            default:"나무 낚싯대"
        },
        level:{
            type:Number,
            default:1
        }
    },
    pickaxe:{
        name:{
            type:String,
            default:"나무 곡괭이"
        },
        level:{
            type:Number,
            default:1
        }
    },
    ax:{
        name:{
            type:String,
            default:"나무 도끼"
        },
        level:{
            type:Number,
            default:1
        }
    },
});

const User = model<IUser>('Game', UserSchema);
export default User;