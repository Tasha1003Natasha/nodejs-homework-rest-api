const register = require("./register");
const verifyEmail = require("./verifyEmail");
const resendEmail= require("./resendEmail")
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  verifyEmail,
  resendEmail,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
