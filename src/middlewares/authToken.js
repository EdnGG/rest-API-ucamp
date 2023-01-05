const jwt = require("jsonwebtoken");

const tokenVerification = (req, res, next) => {
  // const token = req.headers["x-access-token"];
  
  const token = req.get('token')
  console.log('Token from headers: ', token)
  // const token = req.query.token;
  // console.log("Token I got from req.quey.token: ", token);
  jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid user",
      });
    }
    // Adding the 'user' propertiy to the 'req' object
    req.user = decoded.data;
    next();
  });
};

const verificarAdministrador = (req, res, next) => {
  const role = req.usuario.role;

  if (role === "ADMIN") {
    next();
  } else {
    return res.status(401).json({
      mensaje: "Invalid user",
    });
  }
};

module.exports = { tokenVerification, verificarAdministrador };
