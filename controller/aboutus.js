const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('aboutus');
});

router.get('/aboutus', (req, res) =>{
    res.render('aboutus');
})

module.exports = router;