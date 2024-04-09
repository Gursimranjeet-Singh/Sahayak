const userRequestModal = require("../database/models/available-request");
const connectReqModal = require("../database/models/connect-request");

exports.connectVoluntClient = async (req, res) => {
  const { ReqNo, nameVol, contactVol, mailVol, volMessage } = req.body;
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
    nameVol: nameVol,
    contactVol: contactVol,
    mailVol: mailVol,
    volMessage: volMessage,
  });
  await newReqConnect.save();
  res.status(200).json({
    type: "success",
    message: "Your request has been processed.",
  });
};
