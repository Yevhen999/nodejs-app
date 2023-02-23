const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

const router = express.Router();

console.log(listContacts());

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  res.json(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  res.json(contact);
});

router.post("/", async (req, res, next) => {
  const contact = await addContact(req.body);
  res.json(contact);
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const remContact = await removeContact(contactId);
  res.json(remContact);
});

router.put("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await updateContact(contactId, req.body);
  res.json(contact);
});

module.exports = router;
