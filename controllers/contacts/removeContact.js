const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id, owner);
  if (!result) {
    throw RequestError(404);
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeContact;
