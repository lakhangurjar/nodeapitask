var express = require('express');
var router = express.Router();
const formFieledController = require('../controllers/formFieled.controller')
const validation = require('../validations/user.validation')

//=========Routes Here==========
/* create form entries route */
router.post("/create-entries", formFieledController.createFormEntries);

//* fatch all entries route */
router.get("/get-all-entries", formFieledController.getAllFormEntries);

module.exports = router;