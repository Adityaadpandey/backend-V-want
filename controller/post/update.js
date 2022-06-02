const Post = require("../../models/Post");

const update = async (req, res) => { 
    const {title, desc} = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (desc) { newNote.desc = desc };

        // Find the note to be updated and update it
        let note = await Post.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }
        note = await Post.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = update;