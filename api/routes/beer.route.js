const express = require('express');
const router = express.Router();
const BeerController = require('../controllers/beer.controller');

// GET /api/users
router.get('/', BeerController.getAllBeers);

// GET /api/users/:id
router.get('/:id', BeerController.getBeerById);

// POST /api/users
router.post('/', BeerController.createBeer);

// PUT /api/users/:id
router.put('/:id', BeerController.updateBeer);

// PATCH /api/users/:id
router.patch('/:id', BeerController.updatePartialBeer);

// DELETE /api/users/:id
router.delete('/:id', BeerController.deleteBeer);

module.exports = router;