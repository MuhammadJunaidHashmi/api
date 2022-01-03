const jsonServer = require('json-server');
const server = jsonServer.create();
static: './build'
const router = jsonServer.router('./api/db.json');
const middlewares = jsonServer.defaults({
});
const PORT = process.env.PORT || 3003;
server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});


