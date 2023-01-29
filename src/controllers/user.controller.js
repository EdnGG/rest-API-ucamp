const User = require("../models/userSchema");
const Auth = require("../models/authSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { msg, msgError, restApi } = require("../helpers/helpers.js");
// hash Password
const saltRounds = 10;

const getAllUsers = async (req, res) => {
  try {
    msg("GETTING ALL USERS");
    const users = await User.find();
    return restApi(res, "GETTING ALL USERS SUCCESSFULLY", users);
  } catch (err) {
    msgError("ERROR GETTING ALL USERS");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const postUser = async (req, res) => {
  try {
    msg("POSTING A NEW USER");
    const newUser = await User.create(req.body);
    return restApi(res, "USER CREATED SUCCESSFULLY", newUser);
  } catch (err) {
    msgError("ERROR POSTING A USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    msg("UPDATING A USER");
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    restApi(res, "USER  UPDATED SUCCESSFULLY", updatedUser);
  } catch (err) {
    msgError("ERROR UPDATING USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    msg("DELETING A USER");
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    restApi(res, "USER DELETED SUCCESSFULLY", deletedUser);
  } catch (err) {
    msgError("ERROR DELETING USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    msg("SIGNING UP A NEW USER");

    if (!name && !password && !email) {
      return res.status(400).json({
        message: "Please fill up all fields correctly",
      });
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = {
      user: {
        id: user._id,
      },
    };

    const userCreated = jwt.sign(
      payload,
      process.env.SECRET_TOKEN_KEY,
      {
        expiresIn: 60 * 60 * 24,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

    // const newUser = await User.create(body);
    return restApi(res, "USER CREATED SUCCESSFULL ,", userCreated);
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
    const user = await User.findOne({ email: req.body.email }); // user contiene tambien el password
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
    if (user.email && user.password) {
      // Token con toda la info del usuario
      // const token = jwt.sign({ data: user }, process.env.SECRET_TOKEN_KEY, {
      //   expiresIn: 60 * 60 * 24,
      // });
      // Token con solo el id del usuario
      const token = jwt.sign({ data: user._id }, process.env.SECRET_TOKEN_KEY, {
        expiresIn: 60 * 60 * 24,
      });
      user.token = token;
      console.log("Token: ", token);
    } else {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // user.token = token;
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
    const user = await User.findOne({
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
  getAllUsers,
  postUser,
  updateUser,
  deleteUser,
  signup,
  login,
  logOut,
};
