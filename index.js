const express = require('express');
const app = express();
const db = require('./models/connection')
const cors = require('cors');
app.use(cors());
app.use(express.json());
/*app.get('/insertuser', (req, res) => {
        //console.log(req.params.id);
        res.send(`<h1>${req.body}</h1>`)
        res.send(req.body);
    })*/

app.use('/', require('./routes/api/api'));

const PORT = 50;
app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })