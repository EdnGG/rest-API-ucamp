const msg = (msj) => {
  console.log(`\x1b[33m ${msj}  \x1b[0m`);
};

const msgError = (msg) => {
  console.log(`\x1b[31m ${msg}  \x1b[0m`);
  // res.status(500).json({
  //   // msg: err.message,
  //   status: "ERROR",
  // });
};

const restApi = (res, msg, data) => {
  res.json({
    msg: msg,
    total: data.length,
    data: data,
  });
};

module.exports = {
  msg,
  msgError,
  restApi,
};
