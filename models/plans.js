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
    } if (state === "on") {
        $("#newcards").empty();
        $(this).attr("state", "off");
    }


    console.log(cat);

    $.ajax({
        url: url + "exercise/?limit=100&muscle=" + cat + "&language=2", success: function (err, body, result) {
            console.log(err.results)


            for (i = 0; i < err.results.length; i++) {
                if (err.results[i].name === undefined) {
                } else if (i % 5 === 0) {
                    console.log(err.results[i].name)

                    var cardHover = $("<div></div>");
                    cardHover.addClass("card hoverable");

                    var cardTitle = $("<div></div>");
                    cardTitle.addClass("card-content");
                    var exName = $("<h6></h6>");
                    exName.addClass("center");
                    exName.attr("val", err.results[i].name);
                    exName.append(err.results[i].name);
                    cardTitle.append(exName);

                    /* var addButton = $("<div></div>");
                     addButton.addClass("card-tabs");
                     var buttonRef = $("<a>");
                     buttonRef.addClass("btn-floating btn-small waves-effect waves-light blue lighten-1");
                     var buttonI = ("<i class='material-icons'></i>");
                     buttonI.append("add");
                     buttonRef.append(buttonI);
                     addButton.append(buttonRef);*/

                    var exBody = $("<div></div>");
                    exBody.addClass("card-content grey lighten-4");

                    var j = 0;

                    var cardReps = $("<div></div>");
                    cardReps.attr("id", err.results[i].name)
                    var repsInput = $("<input>");
                    repsInput.addClass("validate center");
                    repsInput.attr("placeholder", '""');
                    repsInput.attr("id", "reps_input" + j);
                    repsInput.attr("type", "text");;
                    var repsLabel = $("<label></label>");
                    repsLabel.addClass("center");
                    repsLabel.attr("for", "reps_input");
                    cardReps.append(repsInput, repsLabel);

                    var cardSets = $("<div></div>");
                    cardSets.attr("id", err.results[i].name)
                    var setsInput = $("<input>");
                    setsInput.addClass("validate center");
                    setsInput.attr("placeholder", '""');
                    setsInput.attr("id", "sets_input" + j);
                    setsInput.attr("type", "text");;
                    var setsLabel = $("<label></label>");
                    setsLabel.addClass("center");
                    setsLabel.attr("for", "sets_input")
                    cardSets.append(setsInput, setsLabel);

                    var cardWeight = $("<div></div>");
                    cardWeight.attr("id", err.results[i].name)
                    var weightInput = $("<input>");
                    weightInput.addClass("validate center");
                    weightInput.attr("placeholder", '""');
                    weightInput.attr("id", "weight_input" + j);
                    weightInput.attr("type", "text");;
                    var weightLabel = $("<label></label>");
                    weightLabel.addClass("center");
                    weightLabel.attr("for", "weight_input")
                    cardWeight.append(weightInput, weightLabel);

                    exBody.append(cardReps, cardSets, cardWeight);
                    cardHover.append(cardTitle, exBody);
                    $("#newcards").append(cardHover);
                    j++



                };
            };

        }
    })
})