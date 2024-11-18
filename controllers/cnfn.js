const user = require("../models/schema")

async function getdata(req, res) {
    const body = req.body
    if (!body) res.json({ msg: "Please Give Complete Data" })
    console.log(body);
    await user.create({
        Username: body.Username,
        Email: body.Email,
        Remarks: body.Remarks
    })
    res.json({ status: "Successfully Created" })
}

module.exports = {
    getdata
}