const express = require('express');
const { register, login, selfidentify } = require('../services/auth.services');
const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me",authenticateToken, selfidentify);

module.exports = router;
