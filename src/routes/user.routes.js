const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authToken.js");
const {
  getAllUsers,
  postUser,
  updateUser,
  deleteUser,
  signup,
  login,
  verificar,
} = require("../controllers/user.controller.js");

router.get("/user", getAllUsers);

router.post("/user", postUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

router.post("/user/signup", signup);

router.post("/user/login", login);

// checar 'verificar'
router.get("/user/verify", auth, async (req, res) => {
  try {
    // CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
    const usuario = await Usuario.findById(req.user.id).select("-password");
    res.json({ usuario });
  } catch (error) {
    // EN CASO DE ERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
    res.status(500).json({
      msg: "Hubo un error en verificar",
      error,
    });
  }
});

module.exports = router;
