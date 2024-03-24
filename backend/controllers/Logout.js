exports.logoutUser = () => (req, res) => {
  // clear cookies
  res.clearCookie("refreshtoken");
  return res.json({
    message: "Logged out successfully! 🤗",
    type: "success",
  });
};
