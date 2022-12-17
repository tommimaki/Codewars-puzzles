
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


const alphabet = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};

function position(letter){
    return Object.keys(alphabet).find(key => alphabet[key] === letter);
    }

    console.log(position('z'));

    //muiden vastaukset oli luokkaa:
    // function position(letter){
    //     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //     return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
    //   }

// eli käytettiin alphabet stringiä, josta etsittiin str.indexOf(letter) + 1 metodilla kirjaimen index.
//todnäk parempi ratkaisu kun oma, ei tarvitse ainakaan tehdä alphabet objektia XD lol.