// const enq = require('../model/enquiremodel')
const enq = require('../model/Usermodel')
const getallEnq = async (req, res) => {

    const enqlist = await enq.find({})
    res.status(200).json(enqlist)
}
// const getEnq = async (req, res) => {
//     const Check = await Checking.find({})
//     res.status(200).json(Check)
// }
module.exports = getallEnq