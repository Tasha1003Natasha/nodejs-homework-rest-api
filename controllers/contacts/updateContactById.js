const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContactById(id, req.body);
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = updateContactById;
