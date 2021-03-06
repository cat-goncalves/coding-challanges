/*
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

function howMuchILoveYou(nbPetals) {
  const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  const num = nbPetals % 6 - 1
  if (nbPetals < 7){
    return phrase[nbPetals - 1]
  }else if(nbPetals % 6 === 0){
    return phrase[5]
  } else{
    return phrase[nbPetals % 6 - 1]
  }
}

//parameter: # petals
  //questions: is it always going to be a number, will there ever be more than one, 
              //will we ever get a flower with more petals than the array?
//return: string, that corresponds to the list of phrases
//examples: nbPetals = 7 => "I love you" || nbPetals = 3 => "a lot"
//pseudocode: 
  //use the # of petals to find which string we need to output

//Alternate Solutions
const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
   return phrases[(n - 1) % phrases.length] 
}