var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: true } );

app.use( bodyParser.urlencoded( { extended: false } ) );

app.set("port", (process.env.PORT || 5000));
app.use(express.static('server/public'));

app.get('/', function(req, res){
  console.log("initial base url connecting");
  res.sendFile(path.resolve("server/public/views/index.html"));
});


///recieves new joke and pushes to jokes array
app.post('/newJoke', function(req, res){
  console.log("funny on the server side too!");
  var newJoke = req.body;
  jokes.push(newJoke);
  console.log(newJoke);
  console.log(jokes);
  res.sendStatus(200);
});

var jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog,",
    punchLine: "It was a shih tzu."
  }
];

console.log(jokes);

////sends jokes array to client
app.get('/jokes', function(req, res){
  res.send(jokes);
  console.log("jokes sent");
});


app.listen( app.get("port"), function(){
  console.log( 'server up on: ', app.get("port") );
}); // end spin up server
