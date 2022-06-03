const Post = require("../../models/Post");

const sum = async (req, res) => { 
    const id = req.params.id;
    const post = await Post.findById(id);
    const total = post.dt1 + post.dt2;
    post.total = total;
    await post.save();
    res.json(post);
}

module.exports = sum;