const express = require('express');
const router = express.Router();
const BreweryController = require('../controllers/brewery.controller');

/**
 * @swagger
 * tags:
 *   name: Brewery
 *   description: API pour les brasserie
 */

/**
 * @swagger
 * /brewery:
 *   get:
 *     summary: Returns the list of all brewerys
 *     description: Returns the list of all brewerys
 *     responses:
 *       200:
 *         description: All brewerys successfully recovered
 *     tags:
 *       - Brewery
 */
router.get('/', BreweryController.getAllBrewerys);

/**
 * @swagger
 * /brewery/{id}:
 *   get:
 *     summary: Retrieve a brewery by its ID
 *     description: Retrieve a brewery by its ID
 *     parameters:
 *       - name: id
 *         description: Brewery ID to retrieve
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Brewery successfully recovered
 *       404:
 *         description: Brewery not found
 *     tags:
 *       - Brewery
 */
router.get('/:id', BreweryController.getBreweryById);

/**
 * @swagger
 * /brewery:
 *   post:
 *     summary: Create a new brewery
 *     description: Create a new brewery
 *     parameters:
 *       - name: beer
 *         description: Beer object to create
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *             type: string
 *             required: true
 *           city:
 *             type: string
 *             required: true
 *           address:
 *             type: string
 *             required: true
 *     responses:
 *       201:
 *         description: Brewery successfully created
 *       400:
 *         description: Invalid brewery object
 *       404:
 *         description: Brewery not found
 *       500:
 *         description: Internal server error
 *     tags:
 *       - Brewery
 */
router.post('/', BreweryController.createBrewery);

/**
 * @swagger
 * /brewery/{id}:
 *   put:
 *     summary: Update a brewery by its ID
 *     description: Update a brewery by its ID
 *     parameters:
 *       - name: id
 *         description: Brewery ID to update
 *         in: path
 *         required: true
 *         type: integer
 *       - name: brewery
 *         description: Brewery objet to update
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               required: true
 *             city:
 *               type: string
 *               required: true
 *             address:
 *               type: string
 *               required: true
 *     responses:
 *       200:
 *         description: Brewery successfully updated
 *       404:
 *         description: Brewery to update not found
 *     tags:
 *       - Brewery
 */
router.put('/:id', BreweryController.updateBrewery);

/**
 * @swagger
 * /brewery/{id}:
 *   patch:
 *     summary:  Partially update a brewery by its ID
 *     description: Partially update a brewery by its ID
 *     parameters:
 *       - name: id
 *         description: Brewery ID to partially update
 *         in: path
 *         required: true
 *         type: integer
 *       - name: brewery
 *         description: Brewery object to be partially updated
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               required: true
 *             city:
 *               type: string
 *               required: true
 *             address:
 *               type: string
 *               required: true
 *     responses:
 *       200:
 *         description: Brewery partially successfully updated
 *       404:
 *         description: Brewery to partially update not found
 *     tags:
 *       - Brewery
 */
router.patch('/:id', BreweryController.updatePartialBrewery);

/**
 * @swagger
 * /brewery/{id}:
 *   delete:
 *     summary: Delete a brewery by its ID
 *     description: Delete a brewery by its ID
 *     parameters:
 *       - name: id
 *         description: Brewery ID to delete
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Brewery successfully deleted
 *       404:
 *         description: Brewery to delete not found
 *     tags:
 *       - Brewery
 */
router.delete('/:id', BreweryController.deleteBrewery);

module.exports = router;