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
    title1: {
        type: 'string',
        required: true,
    },
    dt1: {
        type: Number,
        default: 0,
    },
    title2: {
        type: 'string',
        required: true,
    },
    dt2: {
        type: Number,
        default: 0,
    },
    data: {
        type: "array",
        required: true,
    },
    total: {
        type: Number,
        default: 0,
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;