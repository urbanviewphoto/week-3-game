// Show a word 

// and if the person types the word correctly they win 

// word to type: asparagus

// asparagus

// aspaaragus

// fffffff

// step 0: show the word to the user
// step 1: ask them to a type word
// step 2: display if the letter is correct or not 
// step 3: if it's correct tell them they are correct

var words = ["asparagus", "potato", "tomato", "carrot"];
var ranNum = Math.floor(Math.random()*words.length); // 0, 1, 2, 3
var word = words[ranNum];
var textTyped = "";
var wins = 0;

document.querySelector("#textToShow").innerHTML = word;
document.querySelector('#wins').innerHTML = wins;

document.onkeyup = function(event){
    var key = event.key;

    if (textTyped == word){
        alert('did it');
        wins++;
        document.querySelector('#wins').innerHTML = wins;
        ranNum = Math.floor(Math.random()*words.length); // 0, 1, 2, 3
        word = words[ranNum];
        textTyped = '';
        document.querySelector("#textToShow").innerHTML = word;
    }else {
        textTyped = textTyped + key;
        document.querySelector('#lettersTyped').innerHTML = textTyped;
    }
}
