const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Grudge Bin';

app.locals.db = {
  grudges: {
    data: [
      {id:1, name:'Justin', offence:'Being a douche', forgiven: false},
      {id:2, name:'That guy', offence:'Not cleaning', forgiven: true},
      {id:3, name:'Kreston', offence:'Also being a douche', forgiven: false},
    ]
  }
};

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
