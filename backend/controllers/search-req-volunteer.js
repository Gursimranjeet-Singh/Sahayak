const userRequestModal = require("../database/models/available-model");

exports.searchRequest = async (req, res) => {
  const { location } = req.body; // made to include city in it
  const curDate = new Date().toISOString().split("T")[0];
console.log(location)
  if (!location) {
    res.status(400).json({
      type: "error",
      message: "Please provide location information",
    });
    return;
  }

  try {
    const activeRequests = await userRequestModal.find({
      city: location,
      ScheduledDate: { $gt: curDate },
    });

    if (activeRequests.length === 0) {
      res.status(404).json({
        type: "error",
        message: "Sorry, no requests available near you",
      });
      return;
    }
console.log(activeRequests)
    res.status(200).json({
      type: "success",
      data: activeRequests,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      type: "error",
      message: "Internal server error",
    });
  }
};
