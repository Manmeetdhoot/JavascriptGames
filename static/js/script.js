 // Challenge 1: Age in days
function ageInDays(){
var birthYear = prompt("Hey friend ! what year you were born in ? ")
var ageInDays = (2018 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
console.log(ageInDays);
}

//  Challenge : 2 Cat generator
function reset() {
    document.getElementById('ageInDays').remove();
}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-catGen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// challenge 3: rock papaer scissor

function psGame(myChoice){
 console.log(myChoice);
 var humanChoice, botChoice;
 humanChoice = myChoice.id;
botChoice = numToChoice(botRandomC());
result = decideWinner(humanChoice, botChoice);
message = finalMessage(result);
psFrontEnd(myChoice.id, botChoice, message);
}
function botRandomC() {
    return Math.floor(Math.random() * 3);
}
function numToChoice(number) {
    return['rock','paper','scissors'][number];
}
function decideWinner(myChoice,compChoice){
var psDatabase = {
    'rock':{'scissors':1, 'rock':0.5, 'paper':0},
    'paper':{'rock':1, 'paper':0.5, 'scissors':0},
    'scissors':{'paper':1, 'scissors':0.5, 'rock':0},
}

var yourScore = psDatabase[myChoice][compChoice];
var compScore = psDatabase[compChoice][myChoice];

return[yourScore, compScore];
}

function finalMessage([yourScore, compScore]){
if(yourScore=== 0){
    return{'message': 'You Lost!','color': 'red'};
    }else if(yourScore=== 0.5){
        return {'message':'You tied!', 'color':'yellow'};
    }else{
        return {'message':'You Won!', 'color':'green'};
    }
}
function psFrontEnd(humanImageChoice, botImageChoice, finalMessage){
var imageDatabse ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //remove all the images
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML = "<img src='" + imageDatabse[humanImageChoice] + "' height = 150 width= 150 style= 'box-shadow: 0px 10px 50px rgba(37,50, 233 , 1);'>"
messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1"
botDiv.innerHTML = "<img src='" + imageDatabse[botImageChoice] + "' height = 150 width= 150 style= 'box-shadow: 0px 10px 50px rgba(243,38, 24 , 1);'>"

document.getElementById('flex-box-ps-div').appendChild(humanDiv);

document.getElementById('flex-box-ps-div').appendChild(messageDiv);

document.getElementById('flex-box-ps-div').appendChild(botDiv);
}