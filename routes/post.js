const express = require("express");
const router = express.Router();
// const Post = require("../models/Post");
const fetchUser = require("../middleware/fetchUser");
const create = require("../controller/post/new");
const get = require("../controller/post/get");
const update = require("../controller/post/update");
const del = require("../controller/post/del");


router.post("/create",fetchUser, create);

router.get("/all", get)

router.put("/update/:id", fetchUser, update);

router.delete("/delete/:id", fetchUser, del);

module.exports = router;