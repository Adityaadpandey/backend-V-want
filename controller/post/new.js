const Post = require("../../models/Post");

const create = async (req, res) => { 
    const { title, desc} = req.body;
    const post = new Post({  title, desc });
    post.save();
    res.json({ message: "Post Created" });
}

module.exports = create;