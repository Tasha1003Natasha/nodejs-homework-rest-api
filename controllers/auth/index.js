const register = require("./register");
const verifyEmail = require("./verifyEmail");
const resendEmail= require("./resendEmail")
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");

module.exports = {
  register,
  verifyEmail,
  resendEmail,
  login,
  getCurrent,
  logout,
  updateSubscription,
};
