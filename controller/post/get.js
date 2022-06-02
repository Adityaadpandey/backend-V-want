const Post = require("../../models/Post");

const get = async (req, res) => { 
    const posts = await (await Post.find()).reverse();
    res.json(posts);
}

module.exports = get;