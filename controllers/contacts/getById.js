const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getById = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await Contact.findById(id, owner);
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = getById;
