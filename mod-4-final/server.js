const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Grudge Bin';

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
