const express = require("express");

const {
  chatBotReply,
} = require("../controllers/chatController");

const router = express.Router();

router.post("/", chatBotReply);

module.exports = router;