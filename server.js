const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
{
    title: 'Eating Out',
    budget: 40
},
{
    title: 'Gas',
    budget: 100
},
{
    title: 'Groceries',
    budget: 150
}
]
};

app.get('/hello', (req, res) => {
    res.send('Hello World')
});

app.get('/budget', (req, res) => {
    res.json(budget)
});

app.listen(port, () => {
console.log('Example app listening at http://localhost:${port}');
});