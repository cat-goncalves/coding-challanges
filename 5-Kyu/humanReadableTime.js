/**
 * Human Readable Time 
 * https://www.codewars.com/kata/52685f7382004e774f0001f7
 * 
 * DESCRIPTION:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

function humanReadable (seconds) {
  let hr = "00"
  let min = "00"
  let sec = "00"

//   HOUR
  if(seconds >= 3600) {
    let hrQuot = seconds / 3600
    seconds = seconds % 3600
    
    if(Number.isInteger(hrQuot)) {
      console.log(hrQuot)
      hr = hrQuot.toString().padStart(2, "0")
      console.log("hr", hr)
    } else {
      hr = Math.trunc(hrQuot).toString().padStart(2, "0")
    }
  }
  
//  MINUTE    
  if(seconds >= 60) {
    let minQuot = seconds / 60
      if(Number.isInteger(minQuot)) {
        min = minQuot.toString().padStart(2, "0")
      } else {
        seconds = seconds % 60
        min = Math.trunc(minQuot).toString().padStart(2, "0")
      }
   }
  
//  SECOND
    if( seconds < 60) {
      sec = seconds.toString().padStart(2, "0")
    }
  
  return `${hr}:${min}:${sec}`;
}
/**
  P-arameters
    given integer seconds
    Max number is 359999 -> 99:59:59
  R-eturn
    human readable time, formatted with two-digit numbers
    'HH:MM:SS'
    '00:00:00'
  E-xamples

  P-seudocode
    I will ned a mixture of dividing by 60 amd mobius (%) 60
    
    Because we are working with time, we will mainly be dividing my 60
    seconds / 60 tell us how many minutes
    seconds / 60 / 60 = hours -> can be simplified to seconds / 3600
    
    first, we can divide by 3600 to check hours. If >= 1, then that is the # of hours
      if there is a remainder, then that can be used to calculate minutes and seconds
    Using the remainder of hours division, or original seconds # if seconds / 3600 < 1
      # / 60 will tell us how many hours, similar to prev operation >= 1 == minutes
      remainder indicates seconds
    Use padStart to format time into two digit #s
    Template literals with variables
*/

// Alternative Solutions:

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}