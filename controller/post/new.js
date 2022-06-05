const Post = require("../../models/Post");

const create = async (req, res) => { 
    const { title, desc, title1, title2} = req.body;
    const post = new Post({  title, desc, title1, title2 });
    post.save();
    res.json({ message: "Post Created" });
}

module.exports = create;