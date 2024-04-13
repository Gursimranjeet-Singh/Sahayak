//seaches if any request has been accepted that is in the connect-request

const connectReqModal = require("../database/models/connect-model");

exports.statusReq = async (req, res) => {
    const { email } = req.body; // Email of the person to be given
    try {
        const acceptedReq = await connectReqModal.find({ emailClient: email });
        if (acceptedReq.length === 0) {
            res.status(404).json({
                type: "error",
                message: "Sorry, no requests to show."
            });
        } else {
            res.status(200).json({
                type: "success",
                reqData: acceptedReq
            });
        }
    } catch (error) {
        console.error("Error fetching accepted requests:", error);
        res.status(500).json({
            type: "error",
            message: "Internal server error."
        });
    }
};
