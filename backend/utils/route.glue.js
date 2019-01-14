function routeGlue(serviceArr, router) {
  serviceArr.forEach(item => {
    switch(item.method) {
      case 'get': 
        router.get(item.url, item.handler);
        break;
      case 'post':
        router.post(item.url, item.handler);
        break;
      case 'delete': 
        router.delete(item.url, item.handler);
        break;
    }
  });
}

module.exports = {
  routeGlue
}