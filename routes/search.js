const express=require("express")
const router=express.Router()
const {handleSearch}=require("../controller/search");

//whenever user hits /search this will get executed
//handleSearch is the controller
router.route("/").get(handleSearch);


module.exports=router;  