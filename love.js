function lovefunc(flower1, flower2) {
  // moment of truth

  if (flower1 % 2 == 0 && flower2 % 2 != 0) {
    return true;
  } else if (flower2 % 2 == 0 && flower1 % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(1, 4));
console.log(lovefunc(4, 4));

//formatted
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
