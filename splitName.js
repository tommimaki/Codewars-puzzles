function abbrevName(name) {
  let nameAr = name.split(" ");
  let firstLetter = "";

  for (let i = 0; i < nameAr.length; i++) {
    firstLetter += nameAr[i].at(0);
  }

  const flAr = firstLetter.split("");
  flAr.splice(1, 0, ".");
  return flAr.join("").toUpperCase();
}

console.log(abbrevName("Pekka Pouta"));
console.log(abbrevName("tauono Pouta"));
