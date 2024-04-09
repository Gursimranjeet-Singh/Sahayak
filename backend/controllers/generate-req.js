// model for request to be saved
const userRequestModal = require("../database/models/available-request");

exports.requestCreation = async (req, res) => {
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
    city,//required for searching the request
  } = req.body;

  // here source refer to locatoin of user
  const userReq = await userRequestModal.find({ clientName: clientName,clientEmail:clientEmail });
  if (userReq.length === 5) {
    res.status(403).json({
      type: "error",
      message: "Maximum No of request Reached!!",
    });
  } else {
    const reqNumber=Math.floor(Math.random()*10000)
    const newReq = new userRequestModal({
      ReqNo:reqNumber,  
      clientName: clientName,
      clientEmail: clientEmail,
      reqType: reqType,
      ScheduledDate: ScheduledDate,
      postedDate: postedDate,
      Source: Source,
      Destination: Destination,
      reqMessage: reqMessage,
      city:city
    });
    await newReq.save();
    res.status(200).json({
        type:"success",
        message:"User Request created Successfully"
    })
  }
};
