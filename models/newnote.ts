import { Schema, model } from 'mongoose'
import mongoose from 'mongoose';


const newNoteSchema = new Schema({
    name: {
        type: String,
        required: true
    }

    })

const NewNote = mongoose.models.NewNote || mongoose.model('NewNote', newNoteSchema);

export default NewNote