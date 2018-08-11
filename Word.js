var Letter = require('./Letter');

var Word = function(word){
    this.letters = [];
    this.addLetters = function(word){
        word.forEach(letter => {
            this.letters.push( new Letter(letter));
        });
    }
    this.convertWord = function(letters){
        newWord = '';
        letters.forEach(letter => {
            newWord.push(letter.returnLetter());
        });
        return newWord;
    }
    this.checkGuessInWord = function(){
        letters.forEach(letter => {
            letter.checkLetter(letter);
        });
    }
}

module.exports = Word;