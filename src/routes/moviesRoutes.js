const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recomended);
router.get('/detail/:id', moviesController.detail);

router.get('/add', moviesController.add);
router.post('/create', moviesController.create);

router.get('/edit/:id', moviesController.edit);
router.put('/update/:id', moviesController.update);

router.delete('/delete/:id', moviesController.delete);


module.exports = router;