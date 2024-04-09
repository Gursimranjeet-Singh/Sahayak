const express=require("express");
const router=express.Router();

const connect_req=require("../controllers/connect-req");
const generate_req=require("../controllers/generate-req");
const search_req=require("../controllers/search-req");

// path is /req/connect
//to handle connection between volunteer and client
router.post("/connect",connect_req);
// path is /req/generate
//to handle generation of new request by client
router.post("/generate",generate_req)
// path is /req/search
// to search for nearby available request
router.post("/search",search_req)




module.exports=router;