const express = require('express');
const app = express();
const port = 5000;

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]


app.get('/', (req, res) => {
    res.send('Authors API');
});
  
// app.get('/authors/1', (req, res) => {
//     res.send(`${authors[0].name} ${authors[0].nationality}`);
// });
// app.get('/authors/2', (req, res) => {
//     res.send(`${authors[1].name} ${authors[1].nationality}`);
// });
// app.get('/authors/3', (req, res) => {
//     res.send(`${authors[2].name} ${authors[2].nationality}`);
// });
// app.get('/authors/4', (req, res) => {
//     res.send(`${authors[3].name} ${authors[3].nationality}`);
// });

app.get ('/authors/:num', (req, res) => {
    const {num} = req.params
    const newNum = Number(num)-1
    res.send(`${authors[newNum].name} ${authors[newNum].nationality}`);
})
//exo3
app.get ('/authors/:num/books/', (req, res) => {
    const {num} = req.params
    const newNum = Number(num)-1
    res.send(`${authors[newNum].books.join(', ')} `);
})
//exo 4
app.get ('/json/authors/:id', (req, res) => {
    const {id} = req.params
    const newNum = Number(id)-1
    res.json({
        name: ` ${authors[newNum].name}`,
        nationality: `${authors[newNum].nationality}`
    });;
})

app.get ('/json/authors/:id/books', (req, res) => {
    const {id} = req.params
    const newNum = Number(id)-1
    res.json({
        books:  authors[newNum].books,
    });;
})
// route qui retourne le status 404 qui veux dire que c'est notfound
app.get('*', (req, res) => {
    res.status(404).send("Not found")
  })

  app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });

  