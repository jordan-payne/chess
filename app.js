var express = require('express');
var mailer = require('express-mailer');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

mailer.extend(app, {
  from: 'strandx@gmail.com',
  host: 'smtp.gmail.com',
  secureConnection: true,
  port: 465,
  transportMethod: 'SMTP',
  auth: {
    user: 'strandx@gmail.com',
    pass: 'llap6GGL@22'
  }
})

app.get('/mail', function (req, res, next) {
  app.mailer.send('email', {
    to: 'payne.jc@me.com',
    subject: 'I want to share a board with you!'
  }, function (err) {
    if (err) {
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    res.send('Email Sent');
  });
});
