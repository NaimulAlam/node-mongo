const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 280,
    }
    res.send(fruit);
});

app.get('/fruit/banana', (req, res)=>{
    res.send({fruit: 'banana', price: 10000, quantity: 1000,});
});

const users =["Naim", "Alam", "Mohammad", "Abul", "Kalam", "Nur", "Nahid", "Shahid"]

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const name = users[id];
    // console.log(req.query.sort);
    // console.log(req.params.id);
    res.send({id, name});
});

//Post
app.post('/addUser', (req, res)=>{
    // console.log('data received', req.body);
    
    // Save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})


app.listen(3000, () => console.log('listening to port 3000'));