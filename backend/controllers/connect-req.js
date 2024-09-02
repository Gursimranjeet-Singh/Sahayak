const userRequestModal = require("../database/models/available-model");
const connectReqModal = require("../database/models/connect-model");

exports.connectVoluntClient = async (req, res) => {
  console.log("inside connect-req")
  const { ReqNo, nameVol, contactVol, mailVol, volMessage } = req.body;
  try {
    const reqInf = await userRequestModal.findOne({ ReqNo: ReqNo });
    if (!reqInf) {
      res.status(404).json({
        type: "error",
        message: "The request does not exist. Please look for other requests.",
      });
      return;
    }
    const newReqConnect = new connectReqModal({
      ReqNo: ReqNo,
      emailClient: reqInf.clientEmail,
      nameVol: nameVol,
      contactVol: contactVol,
      mailVol: mailVol,
      
    });
    await newReqConnect.save();
    res.status(200).json({
      type: "success",
      message: "Your request has been processed.",
    });
  } catch (error) {
    console.error("Error connecting volunteer to client request:", error);
    res.status(500).json({
      type: "error",
      message: "Internal server error.",
    });
  }
};
