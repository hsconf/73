const express = require('express');
const app = express();
const port = 8000;

app.get('/:hello', (req, res) => {
    res.send(req.params.hello);
})

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})