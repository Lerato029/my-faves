//=============================================The Router Module======================================
//=======Importing Modules=========
//importing express module
const express = require("express");

//using express router function
const router = express.Router();

//importing node fetch so I can use fetch method on the sever-side
const fetch = require("node-fetch");

//=============================================================|READ| VIA GET
router.get("/content/:mediaTerm", async (req, res) => {
  /* splitting request parameter */
  const mediaTerm = req.params.mediaTerm.split(",");

  //then separate each entry from the array into their own variables
  const media = mediaTerm[0];
  const term = mediaTerm[1];

  //Using Search Api from: iTunes Search API:
  //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-webservice-search-api/
  const apiUrl = `https://itunes.apple.com/search?term=${term}&media=${media}&country=ZA`;

  //fetch request which willl return a json element
  const fetchRes = await fetch(apiUrl);
  const json = await fetchRes.json();

  //respond to frontEnd with the json element
  res.json(json);
});

module.exports = router;
//Exporting the router module
