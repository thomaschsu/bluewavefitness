

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

$(".group").on("click", function () {
    var cat = $(this).attr("val");
    var state = $(this).attr("state");
    if (state === "off") {
        $(this).attr("state", "on");
        $.ajax({
            url: url + "exercise/?limit=100&muscle=" + cat + "&language=2", success: function (err, body, result) {
                //console.log(err.results)

                for (i = 0; i < err.results.length; i++) {
                    if (err.results[i].name === undefined) {
                    } else {
                        //console.log(err.results[i].name)
                        var j = 0;
                        var cardHover = $("<div></div>");
                        cardHover.addClass("card hoverable cardHolder");

                        var cardTitle = $("<div></div>");
                        cardTitle.addClass("card-content");
                        var exName = $("<h6></h6>");
                        exName.addClass("center");
                        exName.attr("val", err.results[i].name);
                        exName.attr("id", "title_input" + i);
                        exName.append(err.results[i].name);
                        cardTitle.append(exName);

                        var abc = $("<div></div>");
                        $(abc).attr("id", i);
                        $(abc).addClass("clickbutton");
                        var def = $("<a class 'btn-floating btn-small waves-effect waves-light blue lighten-1'>");
                        var ghi = $("<i class='material-icons'>add</i>");
                        def.append(ghi)
                        abc.append(def);

                        var exBody = $("<div></div>");
                        exBody.addClass("card-content grey lighten-4 ccontent");

                        

                        var cardReps = $("<div></div>");
                        cardReps.attr("id", err.results[i].name)
                        var repsInput = $("<input>");
                        repsInput.addClass("validate center");
                        repsInput.attr("placeholder", "reps");
                        repsInput.attr("id", "reps_input" + i);
                        repsInput.attr("type", "text");;
                        var repsLabel = $("<label></label>");
                        repsLabel.addClass("center");
                        repsLabel.attr("for", "reps_input");
                        cardReps.append(repsInput, repsLabel);

                        var cardSets = $("<div></div>");
                        cardSets.attr("id", err.results[i].name)
                        var setsInput = $("<input>");
                        setsInput.addClass("validate center");
                        setsInput.attr("placeholder", "sets");
                        setsInput.attr("id", "sets_input" + i);
                        setsInput.attr("type", "text");;
                        var setsLabel = $("<label></label>");
                        setsLabel.addClass("center");
                        setsLabel.attr("for", "sets_input")
                        cardSets.append(setsInput, setsLabel);

                        var cardWeight = $("<div></div>");
                        cardWeight.attr("id", err.results[i].name)
                        var weightInput = $("<input>");
                        weightInput.addClass("validate center");
                        weightInput.attr("placeholder", "weight");
                        weightInput.attr("id", "weight_input" + i);
                        weightInput.attr("type", "text");;
                        var weightLabel = $("<label></label>");
                        weightLabel.addClass("center");
                        weightLabel.attr("for", "weight_input")
                        cardWeight.append(weightInput, weightLabel);

                        exBody.append(cardReps, cardSets, cardWeight);
                        cardHover.append(cardTitle, abc, exBody);
                        $("#newcards").append(cardHover);
                        j++



                    };
                };

            }
        })


    } if (state === "on") {
        $("#newcards").empty();
        $(this).attr("state", "off");
    }


    //console.log(cat);


})
