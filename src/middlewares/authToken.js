const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // EXTRAEMOS EL TOKEN QUE VIENE DESDE LA PETICIÓN
  const token = req.header("x-auth-token");
  console.log("token: ", token);

  // SI NO HAY TOKEN, RETORNAMOS UN ERROR
  if (!token) {
    return res.status(401).json({
      msg: "No hay token, permiso no válido",
    });
  }

  try {
    console.log("Entro al try del middleware auth en el backend");
    // console.log(jwt.verify(token, process.env.SECRET_TOKEN_KEY));
    // CONFIRMAMOS LA VERIFICACIÓN DEL TOKEN A TRAVÉS DE LA LIBRERÍA DE JWT
    const openToken = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
    console.log("openToken: ", openToken);
    // SI TODO ESTÁ CORRECTO, A LA PETICIÓN LE ANCLAMOS UNA PROPIEDAD ADICIONAL CON EL TOKEN DESCIFRADO
    req.user = openToken.user;
    console.log("req.user: ", req.user);
    // NEXT, AL INVOCARSE, PERMITE AVANZAR A LA SIGUIENTE FUNCIÓN
    next();
  } catch (error) {
    res.json({
      msg: "Error trying to verify token",
      error: error.message,
    });
  }
};

module.exports = { auth };
