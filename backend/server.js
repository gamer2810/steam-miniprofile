// server.js
// where your node app starts

// init project
const fetch = require("node-fetch");
const steamID = require('steamid');
const express = require("express");
const app = express();
let distinctCount = 0;

// we've started you off with Express
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/ba-sic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/:url", function (request, response) {
  if (
    !request.params.url.startsWith(
      "https://steamcommunity.com/miniprofile/"
    )
  ) {
    response.send("500: Domain not allowed");
  }

  var steamIdIndex = request.params.url.lastIndexOf('/');
  var requestedSteamId = request.params.url.substring(steamIdIndex + 1);
  var language = request.query.l;
  var appId = request.query.appId;
  
  if(!language) {
    language = "en";
  }
  
  console.log(requestedSteamId);
  
  let bigIntdSteamId
  try {
    bigIntdSteamId = new steamID(requestedSteamId).getBigIntID()
  } catch (e) {
    console.error("Error converting steam id")
    console.error(e)
    return
  }
  
  const convertedSteamId = Number(bigIntdSteamId & BigInt(0xFFFFFFFF));
  let convertedUrl = request.params.url.substring(0, steamIdIndex + 1) + convertedSteamId + "?l=" + language;
  
  if(appId) {
    convertedUrl += '&appid=' + appId;
  }
  
  if(request.headers["user-agent"] == null || !request.headers["user-agent"].startsWith("pipedream")) {
     distinctCount++;
    console.log("user: " + convertedUrl + " host:" + request.headers["origin"] + " " + distinctCount)
 }
  
  var langCookie = 'Steam_Language=' + language;
  
  const opts = {
    mode: "no-cors",
    headers: {
      // cookie: langCookie
    }
  }
  
  fetch(convertedUrl, opts)
    .then(function (res) {
      let merged = {
        ...res.headers,
        ...{
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE,GET,PATCH,POST,PUT",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
          "Cache-Control": "public, s-maxage=60",
          "CDN-Cache-Control": "public, s-maxage=60",
          "Vercel-CDN-Cache-Control": "public, s-maxage=3600"
        },
      };
      response.set(merged);
      res.text().then((data) => {
        response.send(data);
      });
    })
    .catch((err) => {
      console.error("err: %o", err);
      response.send("500: Guru Meditation Error");
    });
});

// listen for requests :)
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
