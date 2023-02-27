import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getUser, postUser, getSingleUser, deleteUser, editUser } from '../controllers/users.js';

const router = express.Router();

let users = [
  
];

// Get all users

router.get('/', getUser)

// Add a user
router.post('/', postUser);

// get a single user
router.get('/:id', getSingleUser);

// delete a specific user
router.delete('/:id', deleteUser);

//update user deets

router.patch('/:id', editUser)

export default router;