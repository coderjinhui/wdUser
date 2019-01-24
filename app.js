const { app, BrowserWindow, dialog } = require('electron');
const fs = require('fs');
const dir = require('./html');

function createWindow () {   
  // 创建浏览器窗口
  win = new BrowserWindow({ 
    width: 800, height: 600, 
    webPreferences: {devTools: true} })

  // 然后加载应用的 index.html。
  win.loadFile(dir+'/user/index.html');
}

function backend() {
  // const Koa = require('koa');
  // const app = new Koa();
  // const bodyParser = require('koa-bodyparser');
  // const cors = require('@koa/cors');
  // const connectUtil = require('./backend/models/connect');

  // app.use(bodyParser());
  // app.use(cors());
  // connectUtil.connect('mongodb://localhost:27017').then(res => {
  //   console.log('success')
  //   const routes = require('./backend/routes').route;
  //   for(let i=0;i<routes.length;i++){
  //     app.use(routes[i].routes()).use(routes[i].allowedMethods())
  //   }
  // });

  // app.listen(3100);
  // console.log('localhost:300');
  require('./backend/app');
  createWindow();
}

app.on('ready', () => {
  backend();
});

