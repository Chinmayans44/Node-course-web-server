const express = require('express');
const hbs = require('hbs');
let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: "Home page",
    copyRight: "Copy Right 2018 Funny Coders"
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: "About page",
    copyRight: "Copy Right 2018 Funny Coders"
  })
})

app.listen(3000, () => {
  console.log("Server is up at port 3000");
})
