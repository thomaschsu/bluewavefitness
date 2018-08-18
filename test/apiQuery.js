var request = require("request");

var url = "https://wger.de/api/v2/";
var apiKey = "f87b772b992c8290908b909c0a1c1a5988c0b19c";

var category =         [{
        id: 10,
        name: "Abs"
    },
    {
        id: 8,
        name: "Arms"
    },
    {
        id: 12,
        name: "Back"
    },
    {
        id: 14,
        name: "Calves"
    },
    {
        id: 11,
        name: "Chest"
    },
    {
        id: 9,
        name: "Legs"
    },
    {
        id: 13,
        name: "Shoulders"
    }
];




request(url + "exercise/?muscles=1&?limit=600", { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
    console.log(body.results)
    //need to query name
/*     console.log(body.results[100].name)
    //need to query category and map to the exercise category
    console.log(body.results[100].category)
    //need to make sure language is 2 (maybe) for english so we dont get other languages back
    console.log(body.results[100].language)
    //possibly description
    console.log(body.results[100].description) */
  }
);