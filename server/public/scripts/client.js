console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );



  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    var joke = {};
    joke.whoseJokeIn = $("#whoseJokeIn").val();
    joke.questionIn = $("#questionIn").val();
    joke.punchlineIn = $("#punchlineIn").val();

/////sends new joke to server
    $.ajax({
      type: "POST",
      url: '/newJoke',
      data: joke,
      success: function(response){
        console.log(response);
        console.log("That's hilarious!");
      }
    });

////recieves jokes array from server
    $.ajax({
      type: "GET",
      url: '/jokes',
      success: function(response){
        console.log(response);
        console.log("Client gets the jokes");
        function showJokes(jokes) {
          $("#outputDiv").empty();
          $("#outputDiv").append(jokes);
          for(var i = 0; i < jokes.length; i++) {
            $("#outputDiv").append("<span>" +
                                       jokes[i].whoseJokeIn +
                                       ": " +
                                       jokes[i].questionIn +
                                       ": " +
                                       jokes[i].punchlineIn +

                                       "</span><br>");
          }
        }//end of showJokes
        showJokes();
      }


    });//end of ajax



  }); // end addJokeButton on click
















}); // end doc ready
