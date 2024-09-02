//this is used for both making a new request
// and seeing previous request details which are in the same page in dashboard

// model for request to be saved
const userRequestModal = require("../database/models/available-model");

exports.requestCreation = async (req, res) => {
  console.log(req.body);
  const {
    clientName,
    clientEmail,
    //we dont need location of client as source represent where the client want service or help from
    //we need location for volunteer to display all the nearby requests
    reqType,
    ScheduledDate,
    postedDate,
    Source,
    Destination,
    reqMessage,
    city, //required for searching the request
  } = req.body;
  try {
    // here source refer to locatoin of user
    const userReq = await userRequestModal.find({
      clientName: clientName,
      clientEmail: clientEmail,
    });
    if (userReq.length === 5) {
      res.status(403).json({
        type: "error",
        message: "Maximum No of request Reached!!",
      });
    } else {
      const reqNumber = Math.floor(Math.random() * 10000);
      const newReq = new userRequestModal({
        ReqNo: reqNumber,
        clientName: clientName,
        clientEmail: clientEmail,
        reqType: reqType,
        ScheduledDate: ScheduledDate,
        postedDate: postedDate,
        Source: Source,
        Destination: Destination,
        reqMessage: reqMessage,
        city: city,
      });
      await newReq.save();

      // note remember to use same way to create date in frontend since it return data as well as time
      const curDate = new Date().toISOString().split("T")[0];
      console.log(ScheduledDate);
      console.log(curDate);
      const activeRequests = await userRequestModal.find({
        clientEmail: clientEmail,
        ScheduledDate: { $gt: curDate },
      });
      
      res.status(200).json({
        type: "success",
        ReqData: activeRequests,
      });
    }
  } catch (error) {
    console.error("Error connecting volunteer to client request:", error);
    res.status(500).json({
      type: "error",
      message: "Internal server error.",
    });
  }
};
