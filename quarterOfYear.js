// Given a month as an integer from 1 to 12, 
// return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter;
//  month 6 (June), is part of the second quarter; and month 11 
//  (November), is part of the fourth quarter.


const quarterOf = (month) => {
    let year = [
        ['q1' , 1, 2, 3],
        ['q2' , 4, 5, 6],
        ['q3' , 7, 8, 9],
        ['q4' , 10, 11, 12],
    ]

    for( i = 0; i < year.length; i++) {
        let quarter = year[i];
        for(let j = 0; j < quarter.length; j++) {
            if (quarter[j] == month){
                    quarter[0]
            }
        }
    }
  }

  quarterOf(12);
