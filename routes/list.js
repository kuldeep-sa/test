const express = require("express")
const router = express.Router()
const { getdata } = require("../controllers/cnfn")

router
    .post("/", getdata)

module.exports = router