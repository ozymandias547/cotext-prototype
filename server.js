var express = require('express');
var app = express();

// configure Express
app.configure(function() {
  app.use(app.router);
  app.use(express.static(__dirname + '/'));
});

app.get('/', function(req, res){
	res.redirect('projectIndex.html')
})

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

console.log("listening on port 3000")
app.listen(3000);