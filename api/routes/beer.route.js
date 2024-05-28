const express = require('express');
const router = express.Router();
const BeerController = require('../controllers/beer.controller');

/**
 * @swagger
 * tags:
 *   name: Beer
 *   description: API pour les bières
 */

/**
 * @swagger
 * /beer:
 *   get:
 *     summary: Returns the list of all beers
 *     description: Returns the list of all beers
 *     responses:
 *       200:
 *         description: All beers successfully recovered
 *     tags:
 *       - Beer
 */
router.get('/', BeerController.getAllBeers);

/**
 * @swagger
 * /beer/{id}:
 *   get:
 *     summary: Retrieve a beer by its ID
 *     description: Retrieve a beer by its ID
 *     parameters:
 *       - name: id
 *         description: Beer ID to retrieve
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Beer successfully recovered
 *       404:
 *         description: Beer not found
 *     tags:
 *       - Beer
 */
router.get('/:id', BeerController.getBeerById);

/**
 * @swagger
 * /beer:
 *   post:
 *     summary: Create a new beer
 *     description: Create a new beer
 *     parameters:
 *       - name: beer
 *         description: Beer object to create
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               required: true
 *             abv:
 *               type: number
 *               required: true
 *             ibu:
 *               type: number
 *               required: true
 *             imageUrl:
 *               type: string
 *               required: true
 *             categorie:
 *               type: string
 *               required: true
 *             format:
 *               type: string
 *               required: true
 *     responses:
 *       201:
 *         description: Beer successfully created
 *       400:
 *         description: Invalid beer object
 *       404:
 *         description: Beer not found
 *       500:
 *         description: Internal server error
 *     tags:
 *       - Beer
 */
router.post('/', BeerController.createBeer);

/**
 * @swagger
 * /beer/{id}:
 *   put:
 *     summary: Update a beer by its ID
 *     description: Update a beer by its ID
 *     parameters:
 *       - name: id
 *         description: Beer ID to update
 *         in: path
 *         required: true
 *         type: integer
 *       - name: beer
 *         description: Beer objet to update
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             abv:
 *               type: number
 *             ibu:
 *               type: number
 *             imageUrl:
 *               type: string
 *             categorie:
 *               type: string
 *             format:
 *               type: string
 *     responses:
 *       200:
 *         description: Beer successfully updated
 *       404:
 *         description: Beer to update not found
 *     tags:
 *       - Beer
 */
router.put('/:id', BeerController.updateBeer);

/**
 * @swagger
 * /beer/{id}:
 *   patch:
 *     summary:  Partially update a beer by its ID
 *     description: Partially update a beer by its ID
 *     parameters:
 *       - name: id
 *         description: Beer ID to partially update
 *         in: path
 *         required: true
 *         type: integer
 *       - name: beer
 *         description: Beer object to be partially updated
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             abv:
 *               type: number
 *             ibu:
 *               type: number
 *             imageUrl:
 *               type: string
 *             categorie:
 *               type: string
 *             format:
 *               type: string
 *     responses:
 *       200:
 *         description: Beer partially successfully updated
 *       404:
 *         description: Beer to partially update not found
 *     tags:
 *       - Beer
 */
router.patch('/:id', BeerController.updatePartialBeer);

/**
 * @swagger
 * /beer/{id}:
 *   delete:
 *     summary: Delete a beer by its ID
 *     description: Delete a beer by its ID
 *     parameters:
 *       - name: id
 *         description: Beer ID to delete
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Beer successfully deleted
 *       404:
 *         description: Beer to delete not found
 *     tags:
 *       - Beer
 */
router.delete('/:id', BeerController.deleteBeer);

module.exports = router;