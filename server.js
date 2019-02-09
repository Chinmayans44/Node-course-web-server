const express = require('express');
const hbs = require('hbs');
const request =require('request');
let app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
})
