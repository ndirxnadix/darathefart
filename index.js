const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('test')
})

app.listen(port, () => {
  console.log(`dans le port : ${port}`)
})

const { TwitterApi } = require("twitter-api-v2");
const clientTwitter = new TwitterApi({
  appKey: "X75Mp2XiWmq6HmPA3z4UxPWCr",
  appSecret: "WZBiRwGxP5fQ3eTuvRz3AjhK907fb38npa6MUsWAzULozXQuLH",
  accessToken: "1863688997832368128-F6KE2kZE2IjVgcmINdYF9KuetKrYlT",
  accessSecret: "LPrZoXpgLdnyVM5o7nHaXNV759Y1euH0uyd8IZCeKShxi",
});

let day = 1;
async function tweet() {
  let resultat = await clientTwitter.v2.tweet({
    text: "dara the fart "+ +"("+day+")"
  });
  console.log("tweet numero "+day+" envoyé");
}

const max = 10800000 // 3h
const min = 7200000 // 2h
let heureRandom = (Math.floor(Math.random()*(max-min))+min)
//let jourDepart = new Date().getUTCDate();

setInterval(() => {
    //let jourActuel = new Date().getUTCDate();
    //if(jourActuel != jourDepart){
        tweet();
        day++;
        //jourDepart = jourActuel;
    //}

    heureRandom = (Math.floor(Math.random()*(max-min))+min);
    console.log("prochain tweet dans "+(heureRandom/1000/3600)+" heures");
}, heureRandom);

tweet();
