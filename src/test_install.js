/*
* Auteur : Hugo Rod
* Description : Test de l'installation
* Date : 22.08.2025
* */

import express from 'express';

// Test js
function test(numbers) {
    let product = 1
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i]
    }
    return product
}

let numbers = [1,2,3,7,1]

console.log(test(numbers))

// Test express (https://expressjs.com/en/starter/hello-world.html)
const app = express();
const port = 3000;

app.get('/', (req, res) => {res.send('Hello World!')});

app.listen(port, () => console.log(`Listening on port ${port}`));