const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to my UCAMP API");
});
router.use(require("./auth.routes.js"));
router.use(require("./user.routes.js"));
router.use(require("./movies.routes.js"));
router.use(require("./guitars.routes.js"));

module.exports = router;




