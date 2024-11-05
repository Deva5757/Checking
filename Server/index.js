const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;
const router = require('./scr/routes');
app.use('/dashboard', router)
app.listen(port, () => {
    console.log(port + 'server runing happ')

})
const mongodb=require('./scr/config/db')
mongodb()