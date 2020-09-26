const express = require('express');

const app = express();

// const rootCall = (req, res) => res.send('Thank You Very Much');

app.get('/', (req, res) => {
    res.send('Than you for calling me')
})

app.listen(3000, () => console.log('listing to port 3000'));
