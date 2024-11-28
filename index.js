const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const axios = require('axios');
const  logger = require("./logger");
const  morgan = require("morgan");
require('dotenv').config();

const morganFormat = ":method :url :status :response-time ms";

app.use(bodyParser.json());
app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );

const apiBaseUrl = process.env.API_BASE_URL;

const PORT = process.env.PORT || 3000;

axios.get(`${apiBaseUrl}/users`)
  .then(response => {
    app.get('/users', (req,res)=>{
        res.json(response.data);
    })
  })
  .catch(error => {
    console.error('Error making API call:', error);
  });

// app.get(`/`, function (req, res) {
//   res.send('hello world');
// });

app.get(`/`, function (req, res) {
  res.send('Hello');
});

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})