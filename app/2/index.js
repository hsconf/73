const express = require('express');
const app = express();
const port = 8000;
const Caesar = require('caesar-salad').Caesar;

app.get('/encode/:message', (req, res) => {
    const msg = Caesar.Cipher('c').crypt(req.params.message);
    res.send(msg)
});

app.get('/decode/:message', (req, res) => {
    const msg = Caesar.Decipher('c').crypt(req.params.message);
    res.send(msg)
})

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})