


function solution(){
  let str = '1234'
    let reversed = '';
    let i = str.length;
    
    while(i <= str.length && i != 0 ){
        reversed += str.at(i-1)  
        i--;
    }
    
 return reversed
  }


  solution();