/*
https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript


Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

*/

function maskify(cc) {
  if(cc.length < 5){
    return cc
  } else {
     return cc.slice(-4).padStart(cc.length, "#")
  }
}

//Refactor:
function maskify(cc) {
  return cc.length > 4 ? cc.slice(-4).padStart(cc.length, "#") : cc
}

//padStart:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart