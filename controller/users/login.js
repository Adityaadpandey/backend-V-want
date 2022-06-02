const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRECT = "Aditya";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const data = {
        user: {
          id: User.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRECT);
      res.json({ token }).status(200);
    }
    res.send("User not found").status(400);
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
