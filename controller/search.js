//making a controller function for search to retrieve the results to the client

const restaurant=require("../models/MOCK_DATA.json")

async function handleSearch(req,res){

    //q is the query provided to us by user in search tab
    const {q}=req.query;

    //keys represents where you want to search
    //for e.g here we are searching for restaurants name and city presnt in query

    //one can add items in this key array based on schema
    //For e.g if user has schema first_name we can add to this key array if we want to search in first_name
    const keys=["restaurant_name","restaurant_city"]
    const search=(data)=>{
        return data.filter((item)=>
        keys.some((key)=>item[key].toLowerCase().includes(q)))
    }

    res.json(search(restaurant))
    
}

//exporting the handleSearch function
module.exports={
    handleSearch,
}