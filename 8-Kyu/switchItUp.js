/*
https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/solutions/javascript

Description:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/

function switchItUp(number){
  switch (number) {
      case 0:
        return 'Zero'
      case 1:
        return "One"
      case 2:
        return "Two"
      case 3:
        return 'Three'
      case 4:
        return 'Four'
      case 5:
        return 'Five'
      case 6:
        return 'Six'
      case 7:
        return "Seven"
      case 8:
        return 'Eight'
      case 9:
        return 'Nine'
  }
}

/*
Alternative Solutions
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

function switchItUp(n){
  return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}

function switchItUp(number){
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[number];
}
*/