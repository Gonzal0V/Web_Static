var participants = [];

const showParticipants = (data) => {
    let arrayAuxiliar = [];
    data.forEach(element => {
        arrayAuxiliar.push(element.name);
    });

    $("#user").text("Participants: " + arrayAuxiliar);
    //$("#user").html("<strong>Participants: </strong>" + arrayAuxiliar);
}

const getWinner = (data) => {
    const aleat = Math.floor(Math.random() * data.length);

    $("#selected").html("<strong>Seleccionado: </strong>" + data[aleat].name);
}

$(document).ready(function(){

    //jsonplaceholder.typicode.com/users

    $.ajax({

        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",
        success: function(response){

            participants = response;
            showParticipants(participants);
        },
        error: function(error){
            console.log(error);
            alert(error);
        }
    });
    $(".btn").click(function(){

        getWinner(participants);
    });
});

