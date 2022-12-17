// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). Strings passed
//  in will consist of only letters and spaces. Spaces will be included
//   only when more than one word is present.


// my idea to solve this is to split the words in to an array, loop trough that array, if word > 5 , reverse it.  
function spinWords(string){
    
    let ar = string.split(" ");

    for(let i = 0; i < ar.length; i++){
         if (ar[i].length > 5){
            let rvs =  ar[i].reverse();
            console.log(rvs);
         }
        }     
        console.log(ar)
  }


  spinWords('moi mitä sinulle kuuluu petteri');
