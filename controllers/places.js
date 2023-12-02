const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places });
        })
        .catch((err) => {
            console.log('err', err);
            res.render('error404');
        });
});

router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places');
        })
        .catch((err) => {
            console.log('err', err);
            res.render('error404');
        });
});

router.get('/new', (req, res) => {
    res.render('places/new');
});

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render('places/show', { place });
        })
        .catch((err) => {
            console.log('err', err);
            res.render('error404');
        });
});
