const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");

const { addSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(addSchema), ctrlWrapper(ctrl.addContact));

router.put(
  "/:id",
  validateBody(addSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

module.exports = router;
