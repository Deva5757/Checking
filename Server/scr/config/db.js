const { default: mongoose } = require('mongoose');
const CONNECT_STR="mongodb+srv://rd9786734602:deva@admin.tahsnkq.mongodb.net/Support_Desk?retryWrites=true&w=majority&appName=Admin";
const connectDb=()=>{
mongoose.connect(CONNECT_STR).then(()=>{
    console.log('Connected...')
}).catch((error)=>{
    console.log(error.message)
});
}
module.exports=connectDb;