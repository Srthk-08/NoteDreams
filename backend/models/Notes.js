import { type } from '@testing-library/user-event/dist/type';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: 'General'
    },
    date: {
        type: date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', NotesSchema);