const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
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

module.exports = app;
