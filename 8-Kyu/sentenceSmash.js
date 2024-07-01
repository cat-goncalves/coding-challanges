/**
 * Sentence Smash
 * https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
 * 
* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

  Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 */

function smash (words) {
  if(words.length === 0) {
    return ""
  } else if (words.length === 1) {
    return words[0]
  } else {
    for(let x = 0; x < words.length - 1; x++) {
      words[x] = words[x] + " "
    }
    return words.join("")
  }
};


/**
  P-arameters
    given: array of strings
    array can be empty or contain just 1 word
    no need to santitize the word or add punctuation
      
  R-eturn
    sentence, with each of the words from the array separated by a space
        
    one word example should return the word
    empty array should return empty string
    multiple words should be separated by spaces
      without a space at the beginning or end
  E-xamples
    ([""]), ""
    (["hello"]), "hello"
    (["hello", "world"]), "hello world"
    (["hello", "world"]), "hello world"
  P-seudocode
    first check if array is empty, if empty return empty string
    second check if array has only one element, if only one return the element as is 
      because it already satisfies the requested typing
    third for all arrays with a length > 1, spaces are needed
      We can iterate through the array and manipulate the existing strings
        or create a result variable and concatenate all of the results
        Q: would concatenating the resukts allow us to simplify our logif for
          all use cases and eliminate checks int he first and second step
      we can add spaces to the end of every existing element except the last
      or add spaces to the beginning of every element except for the first

    Refactor:
    because the join() method has a built in separator, it can be used to achieve all goals
*/
