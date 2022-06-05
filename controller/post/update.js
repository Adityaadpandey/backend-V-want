const Post = require("../../models/Post");

const update = async (req, res) => {
    const { title, desc, dt1, dt2, title1, title2 } = req.body;
    const total = dt1 + dt2;
    // const data = req.user;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (dt1) { newNote.dt1 = dt1 };
        if (dt2) { newNote.dt2 = dt2 };
        if (desc) { newNote.desc = desc };
        if (title1) { newNote.title1 = title1 };
        if (title2) { newNote.title2 = title2 };
        if (total) { newNote.total = total };

        // Find the note to be updated and update it
        let note = await Post.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }
        note = await Post.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
        // res.json({data:req.user});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = update;