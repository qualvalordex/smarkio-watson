const express = require('express');
const bodyParser = require('body-parser');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8080;

const db = mysql.createPool({
    host: 'localhost',
    user: 'watson',
    password: 'tts@test',
    database: 'smarkiodb',
    port: 3307
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM comments";

    db.query(sqlSelect, (err, result) => {
        if (!result) return res.send([])
        res.send(result);
    });
});

app.post('/api/addcomment', (req, res) => {
    const commentText = req.body.commentText;

    const sqlInsert = "INSERT INTO comments (comment) VALUES (?);";
    db.query(sqlInsert, commentText, (err, result) => {
        console.log(result);
    });
});

app.post('/api/tts', (req, res) => {
    const comment = req.body.text;
    require('dotenv').config();

    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
        //   apikey: 'OoSTflFIxeDKbQXf_Wy1QnwKb0aH7aS4WToT2gi9JgAu',
            apikey: process.env.API_KEY,
        }),
        // serviceUrl: 'https://api.us-east.text-to-speech.watson.cloud.ibm.com/instances/a9776872-13cd-4113-981e-d35af4395c7f',
        serviceUrl: process.env.API_URL,
    });
    
    const synthesizeParams = {
        text: comment,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaV3Voice',
    };
      
    textToSpeech.synthesize(synthesizeParams)
        .then(response => {
            return textToSpeech.repairWavHeaderStream(response.result);
        })
        .then(buffer => {
            res.send({buffer});
        })
        .catch(err => {
            console.log('error:', err);
    });
});

app.listen(port, () => {
    console.log('Server is running on ' + port + '.');
});