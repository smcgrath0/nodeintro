
//express is a function that is was returned from the function require

const express = require('express');

//server is an object that is returned when calling the express function
const server = express();

function handleGetRequestToRoot(request, response){
  // request;
  response.send("Hello, World");
  console.log('/ was called');
}

server.get('/', handleGetRequestToRoot );

const comparray = ["you look so good", "I like your shoes", "nice Hair"]
server.get('/comparray', function(request, response){
  let randomNum = Math.round(Math.random() * 3);
  response.send(comparray[randomNum]);
})
server.listen( 3001, function(){console.log('server has started3')});
