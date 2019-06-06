const myapp = require('../controllers/myapp');
const express = require('express');

const router = express.Router();


router.get('/',myapp.getdo);
router.get('/about',myapp.about);



module.exports = router;