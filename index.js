const express = require("express");
require("dotenv").config();
const massive = require('massive')
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  // dbInstance.new_planes()
  //   .then(planes => console.log( planes ))
  //   .catch(err => console.log( err ))
  dbInstance.get_planes()
    .then(planes => console.log(planes))
    .catch(err => `u got a ${err}`)
});

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
