const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw RequestError(404);
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeContact;