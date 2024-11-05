const express=require('express');
const router=express()
router.get('/', (req, res)=>{
    res.send('Wake up to reality')
})
const getallEnq=require('./controller/enquirycontroller')

router.get('/enq', getallEnq);
// router.get('/enq/user', getEnq);
module.exports=router;