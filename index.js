import express from 'express';
import bodyParser from 'body-parser';
//var bodyParser = require('body-parser')

import userRoutes from './routes/users.js'
import productRoutes from './routes/products.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes)
app.use('/product', productRoutes)

app.get('/', (req, res) => {
    console.log('TEST');

    res.send('Hello from homepage')
});

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));