const express=require("express")
const Restaurants=require( "../models/MOCK_DATA.json");

const router=express.Router()
const {handleSearch}=require("../controller/search");
const { paginate } = require("../middlewares/paginate");


router.route("/").get(handleSearch);


module.exports=router;  