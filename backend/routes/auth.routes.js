const express = require('express');
const { register, login, selfidentify,changemypassword } = require('../services/auth.services');
const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me",authenticateToken, selfidentify);
router.post("/changemypassword",authenticateToken, changemypassword);

module.exports = router;
