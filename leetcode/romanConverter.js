var romanToInt = function(s) {
  let number = 0
  const val = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
  let arr = s.split('')
  let newArr = arr.map(x => val[x])
  console.log(newArr)
  for(let i = 1; i < newArr.length; i++){
    if(newArr[i] > newArr[i - 1]){
      newArr[i] = newArr[i] - newArr[i - 1]
      newArr[i - 1] = 0
    }
  }
  return newArr.reduce((a,c) => a + c, 0)
};