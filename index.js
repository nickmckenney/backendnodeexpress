const express = require('express');
let port = process.env.PORT || 4001;
const bodyParser = require('body-parser');
const cors = require('cors');

// const sendGrid = require('@sendGrid/mail');
// Sendgrid is causing problems with deploying!

const app = express();


app.use(bodyParser.json());

app.use(cors());
app.post('/api/email', (req, res) => {
const mailjet = require ('node-mailjet')
.connect('c10a1e15ead624af9628a7d1aff8b960', '9a8dbcc843fe2d2d51c87b6ded5bbdb7')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "mckenney2001@gmail.com",
        "Name": req.body.name
      },
      "To": [
        {
          "Email": "mckenney2001@gmail.com",
          "Name": "Nicholaus"
        }
      ],
      "Subject": req.body.email,
      "TextPart": req.body.message,
      "HTMLPart": req.body.message,
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
});

app.listen(port, ()=>{
    console.log("app is alive");
});

