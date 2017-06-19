var inquirer = require("inquirer");
var Word = require('./Word.js');
var Letter = require('./Letter.js');

var words = ['ghostsnstuff', 'cafedelmar', 'pulsewidth', 'porcelain', 'foranangel', 'nothingbutyou'];

var word = words[Math.floor(Math.random()*words.length)];

var play = new Word(word);

var playGame = function(){
	// console.log(word);
	inquirer.prompt([{
	type:"input",
	name:"guess",
	message:"What is your next guess?"
}]).then(function(answers){
			//if the letter is in the word then run the updateLetter function
            //if the letter is wrong but has been guessed already then don’t decrement guesses, tell the user to guess another letter
            //if the guess was wrong and not guessed already then make guesses go down and store the letter as an incorrect guess
			var ma = new Word.prototype.makeAndPushLettersIntoWord();
			ma.makeAndPushLettersIntoWord();
			// var di = new Word.prototype.display();
			// console.log(di.display());
			// var up = new Word.prototype.updateLetter(answers.guess);
			// console.log(up.updateLetter());
			// Word.prototype.checkWon();
			// Word.prototype.isLetterInWord(answers.guess);
			
			playGame();
});
};

playGame();