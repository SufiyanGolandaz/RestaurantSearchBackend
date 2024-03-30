const express=require("express");
const searchRoute=require("./routes/search");
const Restaurant=require( "./models/MOCK_DATA.json");
const { paginate } = require("./middlewares/paginate");
const app=express()

//defaulting to PORT 8002 if not specified
const PORT=process.env.PORT || 8002;


app.use(express.json())

// url--> http://localhost:8002/restaurants?page=2&limit=10
//page and limit are optional query paramters
app.get("/restaurants",paginate(Restaurant),(req,res)=>{
    res.json(res.paginatedResults);
})

//url -->http://localhost:8002/search/?q=starbucks
app.use("/search",searchRoute)


app.listen(PORT,()=>{
    console.log("server started on port",PORT);
})