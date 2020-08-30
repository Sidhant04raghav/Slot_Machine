const express=require("express");
const app=express();
app.use('/',express.static('public'));
const PORT=process.env.PORT||4567;
app.listen(PORT,(req,res)=>{
	console.log("server started");
})