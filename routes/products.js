import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here you will find list of products");
});


export default router;