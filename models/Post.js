const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    desc: {
        type: 'string',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    dt1: {
        type: Number,
        default: 0,
    },
    dt2: {
        type: Number,
        default: 0,
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;