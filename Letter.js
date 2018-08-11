
var Letter = function(letter){
    this.letter = letter,
    this.isGuessed = false,
    this.returnLetter = function(){
        if(isGuessed){
            return this.letter;
        } else {
            return '*';
        }
    }
    this.checkLetter = function(guessLetter){
        if(guessLetter === this.letter){
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;