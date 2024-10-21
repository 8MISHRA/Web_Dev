const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    fs.readFile('MOCK_DATA.json', 'utf-8', (err, data) => {            
        const users = JSON.parse(data);
        let userList = '<ul>';
        users.forEach(user => {
            userList += `<li>${user.first_name} ${user.last_name} --<br> ${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}-- ${user.email}</li><br>`;
        });
        userList += '</ul>';
        res.send(userList);
    });
});


app.get('/test', (req, res) => {
    res.send('This is the test page');
});


app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    res.send(`Hello ${id}!`);
});

app.get('/api/', (req, res) => {
    fs.readFile('MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.parse(data));
        }
    });
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});

