import {Schema, model, Document} from 'mongoose'

import bcrypt from 'bcrypt'

export interface IUser extends Document{
    username: string,
    email?: string,
    password: string,
    encryptPassword(password:string):Promise<string>,
    validatePassword(password: string):Promise<boolean>,
    facebookId?:string
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: false,
        lowercase: true
    },
    password: {
        type: String,
        required: false
    },
    facebookId: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});


userSchema.methods.encryptPassword = async (password:string):Promise<string> => {
const salt = await bcrypt.genSalt(10)
return bcrypt.hash(password, salt)
}

userSchema.methods.validatePassword = async function (password: string):Promise<boolean> {
 return  await bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema)