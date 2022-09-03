const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//importing schema of image
const trySchema = require('./try.js');

//get all fuc in variable
const app = express();

//set input and output as json
app.use(express.json());
app.use(cors());

//mongodb connection
mongoose.connect('mongodb://localhost/IchcchaCivilWorks', {useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (e) => console.log(e));
db.once('open', () => console.log("connected to database"));

//read operation
app.get('/', async (req, res) => {
    const data = await trySchema.find({});
    res.send(data);
})

//create operation
app.post('/create', async (req, res) => {
    // const dataToSend = {
    //     name: "Minal",
    //     phoneNo: 8268661715
    // }

    // console.log()
    const send = new trySchema({...req.body});
    const ss = send.save();
    res.send(ss);
})



app.listen(3000, () => {
    console.log("Serving port 3000");
})