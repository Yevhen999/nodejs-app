const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  // updateContact,
} = require("../../models/contacts");

const router = express.Router();

console.log(listContacts());

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  res.send(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  res.send(contact);
});

router.post("/", async (req, res, next) => {
  const contact = addContact(req.body);
  res.send(contact);
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const remContact = await removeContact(contactId);
  res.send(remContact);
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
