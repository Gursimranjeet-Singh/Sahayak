const express=require("express");
const router=express.Router();

const {connectVoluntClient:connect_req}=require("../controllers/connect-req");
const {requestCreation:generate_req}=require("../controllers/generate-req");
const {searchRequest:search_req_voln}=require("../controllers/search-req-volunteer");
const {statusReq:search_req_client}=require("../controllers/search-req-client")

//to handle connection between volunteer and client
router.post("/connect",connect_req);

//to handle generation of new request by client
router.post("/generate",generate_req)

// to search for nearby available request
router.post("/search/volunteer",search_req_voln)

// to search whether any of the request is accepted or not and to show contact detail of volunteer
router.post("/search/client",search_req_client)




module.exports=router;