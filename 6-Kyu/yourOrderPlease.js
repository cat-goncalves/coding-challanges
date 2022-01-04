/*

*/

function order(words){
  let result = []
  words.split(' ').forEach(word => {
    for(let char of word){
      if(typeof Number(char) === 'number'){
        result[Number(char) - 1] = word
      }
    }
  })
  return result.join(' ')
}