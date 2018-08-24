

var url = "https://wger.de/api/v2/";
var category = [{
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







$("#abs").on("click", function() {

    var cat = category[0].name
    console.log(cat);

    $.ajax({url: url + "exercise/?limit=100&muscle=" + cat + "&language=2", success: function(err, body, result){
        console.log(err.results[0])
        console.log("----------")
        console.log(body)
        console.log("----------")
        console.log(result)
    }})})
