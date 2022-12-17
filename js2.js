//Works but ugly Code, lets refactor
// function fizzbuzz(n) {
//   let ar = [];
//   for (let i = 1; i <= n; i++) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//       ar.push('fizzbuzz');
//     } else if (i % 3 === 0) {
//       ar.push("fizz");
//     } else if (i % 5 === 0) {
//       ar.push("buzz");
//     }else{
//       ar.push(i)
//     }
//   }
//   console.log(ar);
//   return ar;
// }



function fizzbuzz(n)
{
  let ar =[];
  for(let i=1; i <= n; i++ ){
  let oP =''
  if(i%3==0) {oP += 'Fizz'}

  if(i%5==0) {oP +='Buzz'}

  if(oP== "") {oP = i}
    ar.push(oP)
    }
  return ar
}

console.log(fizzbuzz(15));
