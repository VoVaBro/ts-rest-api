import {Schema, model, Document} from 'mongoose'


export interface IWod extends Document{
    title: string,
    description: string,
    trainingTime?: number,
    userId: string
}

const wodSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    trainingTime: {
        type: Number,
        required: false
    }, 
    userId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


export default model<IWod>('WOD', wodSchema)