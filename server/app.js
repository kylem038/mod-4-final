const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const shortid = require('shortid');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.locals.db = {
  grudges: {
    data: [
      {id:1, name:'Justin', offence:'Being a douche', forgiven: false},
      {id:2, name:'That guy', offence:'Not cleaning', forgiven: true},
      {id:3, name:'Kreston', offence:'Hate this guy', forgiven: false},
    ]
  }
};

app.get('/grudges', (request, response) => {
  response.json(app.locals.db.grudges.data);
});

app.post('/grudges', (request, response) => {
  const id = shortid.generate();
  const savedGrudge = { id:id, name:request.body.name, offence:request.body.offence, forgiven: false };
  app.locals.db.grudges.data.push(savedGrudge);

  response.json(app.locals.db.grudges.data);
});

module.exports = app;
