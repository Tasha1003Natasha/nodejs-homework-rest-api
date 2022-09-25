const listContacts = require("./listContacts.js");
const getById = require("./getById");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const removeContact = require("./removeContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  listContacts,
  getById,
  addContact,
  updateContactById,
  removeContact,
  updateFavorite,
};
