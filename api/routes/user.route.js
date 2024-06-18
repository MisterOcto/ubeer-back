const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Endpoints pour les users
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Returns the list of all users
 *     description: Returns the list of all users
 *     responses:
 *       200:
 *         description: All users successfully recovered
 *     tags:
 *       - User
 */
router.get('/', UserController.getAllUsers);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Retrieve a user by its ID
 *     description: Retrieve a user by its ID
 *     parameters:
 *       - name: id
 *         description: User ID to retrieve
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: User successfully recovered
 *       404:
 *         description: User not found
 *     tags:
 *       - User
 */
router.get('/:id', UserController.getUserById);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user
 *     parameters:
 *       - name: user
 *         description: User object to create
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
 *         description: User successfully created
 *       400:
 *         description: Invalid user object
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 *     tags:
 *       - User
 */
router.post('/signup', UserController.createUser);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user by its ID
 *     description: Update a user by its ID
 *     parameters:
 *       - name: id
 *         description: User ID to update
 *         in: path
 *         required: true
 *         type: integer
 *       - name: user
 *         description: User objet to update
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
 *         description: User successfully updated
 *       404:
 *         description: User to update not found
 *     tags:
 *       - User
 */
router.put('/:id', UserController.updateUser);

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     summary:  Partially update a user by its ID
 *     description: Partially update a user by its ID
 *     parameters:
 *       - name: id
 *         description: User ID to partially update
 *         in: path
 *         required: true
 *         type: integer
 *       - name: user
 *         description: User object to be partially updated
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
 *         description: User partially successfully updated
 *       404:
 *         description: User to partially update not found
 *     tags:
 *       - User
 */
router.patch('/:id', UserController.updatePartialUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user by its ID
 *     description: Delete a user by its ID
 *     parameters:
 *       - name: id
 *         description: User ID to delete
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: User successfully deleted
 *       404:
 *         description: User to delete not found
 *     tags:
 *       - User
 */
router.delete('/:id', UserController.deleteUser);

module.exports = router;