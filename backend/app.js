const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const connectUtil = require('./models/connect');

app.use(bodyParser());
app.use(cors());

connectUtil.connect('mongodb://localhost:27017/test_db').then(() => {
	console.log('success');
  const routes = require('./routes').route;
  console.log(routes);
	for(let i=0;i<routes.length;i++){
		app.use(routes[i].routes()).use(routes[i].allowedMethods());
	}
}).catch(err => {
  console.log('db connect error', err);
});



app.listen(3000);
console.log('service on localhost:3000');