const msg = (msj) => {
  console.log(`\x1b[36m%s\x1b[0m`, `Succesfully connected to Mongo DB `);
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
  restApi,
};
