import express, { response } from 'express';
import request from 'request';
import api_key from '../secret'
  

const routes = express.Router();


const tickerDetails = routes.get('/tickerDetails', (req, res) => {
  const tickerName = req.query.ticker;
  const urlTickerDetails: string = `https://api.polygon.io/v1/meta/symbols/${tickerName}/company?&apiKey=${api_key}`

  res.setHeader('Access-Control-Allow-Origin', '*');
  request(urlTickerDetails, (error, response, body) => {
    if (error) {
      throw new Error(error);
    }
    res.send(body);
  });
});



export default tickerDetails;
