import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

router.get('/', (req,res) => {
    console.log(users)
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`user with name ${user.firstName} added to DB`)

    console.log(req.body);
});

export default router;