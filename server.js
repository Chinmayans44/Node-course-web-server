const express = require('express');
const hbs = require('hbs');
const request =require('request');
const expressFingerprint = require('express-fingerprint');
const fs = require("fs");
const app = express();
const logger = require("nodejslogger");
logger.init({"file":"logger-file","mode":"DIE"});
const port = process.env.PORT || 3000;

 
app.use(expressFingerprint({
    parameters:[
        // Defaults
        expressFingerprint.useragent,
        expressFingerprint.acceptHeaders,
        expressFingerprint.geoip,
 
        // Additional parameters
        // function(next) {
        //     // ...do something...
        //     next(null,{
        //     'param1':'value1'
        //     })
        // },
        // function(next) {
        //     // ...do something...
        //     next(null,{
        //     'param2':'value2'
        //     })
        // },
    ]
}))
 
// app.get('*',function(req,res,next) {
//     // Fingerprint object
//     console.log(req.fingerprint)
// })

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  fs.appendFile("./user-fingerprint-logging.json",JSON.stringify(req.fingerprint)+"\n",function(err,success){
    if(err){
      console.log("Error in storing to file");
    }
  });
  logger.info(JSON.stringify(req.fingerprint)+"\n");
  console.log(req.fingerprint);
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

app.get('/getlog', (req, res) => {
  // let fileContent=fs.readFileSync("./user-fingerprint-logging.json");
  // console.log(fileContent);
  // res.render(JSON.parse(fileContent));
  res.sendFile("app/user-fingerprint-logging.txt");
})

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
})
