const app = require('./config/server.config');
const http = require('http');
const server = http.createServer(app);

app.use('/api', require('./routes/api.routes.js'));
app.use('*', require('./routes/html.routes.js'));

app.use((req, res, next) => {
  res.status(404).send('404 Page not found');
});

app.use((req, res, next) => {
  res.status(500).send('500 Server error');
});
app.set('port', (process.env.PORT || 8081));
app.set('host', (process.env.IP || 'localhost'));

server.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running on http://${app.get('host')}:${app.get('port')}`);
});
