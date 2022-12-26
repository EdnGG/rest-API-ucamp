const Auth = require("../models/authSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { msg, msgError, restApi } = require("../helpers/helpers.js");
// hash Password
const saltRounds = 10;

const signup = async (req, res) => {
  try {
    msg("SIGNING UP A NEW USER");
    const body = {
      name: req.body.name,
      email: req.body.email,
    };
    body.password = bcrypt.hashSync(req.body.password, saltRounds);

    if (!body.name && !req.body.password && !body.email) {
      return res.status(400).json({
        message: "Please fill up all fields correctly",
      });
    }
    if (!body.name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }
    if (!body.email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }
    if (!body.password) {
      return res.status(400).json({
        message: "Password is required",
      });
    }

    bcrypt.hashSync(req.body.password, saltRounds);
    console.log("Body: ", body);
    const newUser = await Auth.create(body);
    return restApi(res, "USER CREATED SUCCESSFULL ,", newUser);
  } catch (err) {
    msgError("ERROR POSTING A USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    msg("LOGGING IN A USER");
    const user = await Auth.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }

    const token = jwt.sign({ data: user }, process.env.SECRET_TOKEN_KEY, {
      expiresIn: 60 * 60 * 24,
    });

    user.token = token;

    return restApi(res, "USER LOGGED IN SUCCESSFULLY", user);
  } catch (err) {
    msgError("ERROR LOGGING IN USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const logOut = async (req, res) => {
  try {
    msg("LOGGING OUT A USER");
    const user = await Auth.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    user.token = null;
    return restApi(res, "USER LOGGED OUT SUCCESSFULLY", user);
  } catch (err) {
    msgError("ERROR LOGGING OUT USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

module.exports = {
  signup,
  login,
  logOut,
};
