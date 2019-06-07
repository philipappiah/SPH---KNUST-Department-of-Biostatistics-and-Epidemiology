const myapp = require('../controllers/myapp');
const express = require('express');

const router = express.Router();


router.get('/',myapp.getdo);
router.get('/about',myapp.about);
router.get('/academics', myapp.academics);
router.get('/research',myapp.research);
router.get('/admissions', myapp.admissions);
router.get('/news', myapp.news);



module.exports = router;