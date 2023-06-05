const { Router } = require("express");
const CountryRouter =  require('./CountryRouter');
const ActivityRouter = require ('./ActivityRouter')

const router = Router();

router.use("/Country",CountryRouter);
router.use("/Activity",ActivityRouter)

module.exports = router;
