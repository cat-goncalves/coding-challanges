/**
 * 
 */

function getDivisorsCnt(n){
  let divisors = 0
  for(let i = 0; i <= n; i++){
    if(n % i === 0){
      divisors++
    }
  }
return divisors
}