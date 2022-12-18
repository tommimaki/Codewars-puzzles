// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.



// eli otetaan numero, jos se on positiivinen tehdään siitä nega,
    //jos se on negativiinen tai 0, ei tehdä mitään
 
function makeNegative(num) {

    if(num > 0){
        return num * -1
    } else{
        return num;
    }

  }

  console.log(makeNegative(3))
  console.log(makeNegative(0))
  console.log(makeNegative(-3))