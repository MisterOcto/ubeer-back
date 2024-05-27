const express = require('express');
const router = express.Router();
const BreweryController = require('../controllers/brewery.controller');

// GET /api/users
router.get('/', BreweryController.getAllBrewerys);

// GET /api/users/:id
router.get('/:id', BreweryController.getBreweryById);

// POST /api/users
router.post('/', BreweryController.createBrewery);

// PUT /api/users/:id
router.put('/:id', BreweryController.updateBrewery);

// PATCH /api/users/:id
router.patch('/:id', BreweryController.updatePartialBrewery);

// DELETE /api/users/:id
router.delete('/:id', BreweryController.deleteBrewery);

module.exports = router;