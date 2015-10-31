var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
app.use(express.static(__dirname + '/dist.dev'));

var port = process.env.PORT || 8080;

app.get('/send', function(req, res) {

  var emailAddressToSendTo = req.query.email;
  var gameId = req.query.game_id;

  console.log('Inviting ' + emailAddressToSendTo + ' to join game with id: ' + gameId);
  var mailOptions = {
    from: 'no-reply@angular-chess.herokuapp.com',
    to: emailAddressToSendTo,
    subject: 'Someone has invited you to play chess!',
    text: 'Someone wants you to join them in a game of chess!' +
      ' Follow this link: https://angular-chess.herokuapp.com/#/' +
      gameId,
    html: 'Someone wants you to join them in a game of chess! ' +
      ' Follow this <a href="https://angular-chess.herokuapp.com/#/' +
      gameId +
      '">link</a>!'
  };
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
      res.end("error");
    } else {
      console.log("Message sent: " + response.message);
      res.end("Sent");
    }
  });
});

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_SMTP_LOGIN,
    pass: process.env.MAILGUN_SMTP_PASSWORD
  },
  name: 'angular-chess.herokuapp.com'
});

app.listen(port);
console.log('Starting server using port ' + port);
