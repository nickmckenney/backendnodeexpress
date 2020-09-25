const express = require('express');
let port = process.env.PORT || 4001;
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();


app.use(bodyParser.json());

app.use(cors());
const mailjet = require ('node-mailjet')
.connect('c10a1e15ead624af9628a7d1aff8b960', '9a8dbcc843fe2d2d51c87b6ded5bbdb7')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "mckenney2001@gmail.com",
        "Name": "Nicholaus"
      },
      "To": [
        {
          "Email": "mckenney2001@gmail.com",
          "Name": "Nicholaus"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
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


app.listen(port, ()=>{
    console.log("app is alive");
});

