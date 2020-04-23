const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.post('/send', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    
    const msg = {
        to: 'lmrzds@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
            .then(result => {
                res.status(200).json({
                    success: true
                })
            })
            .catch(err => {
                console.log('error: ', err );
                res.status(401).json({
                    success: false
                })
            })
})

app.listen(8080, '0.0.0.0');


