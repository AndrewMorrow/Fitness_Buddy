const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const landingPages = require("./landingPages.js");

router.use("/", landingPages);
router.use("/api", apiRoutes);

module.exports = router;
