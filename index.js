function dwarfRollCall(dwarves) {
  var output = "";
  for (var i = 0; i < dwarves.length; i++) {
   output += (i+1) + ". " + dwarves[i] + " ";
  }
  return output;
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
   calls.push(planeteerCalls[i] + "! ").toUppercase;
  }
  return calls;
}

function longPlaneteerCalls(words) {
  var long = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4){
      long = true;
    }
  }
  return long;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];          //  my solution uses 2 *nested*  "for" loops
   for (var i = 0, flen= foods.length; i < flen; i++) { //parent loop initializes the child and will reset j until i = flen
     for (var j = 0, clen = cheese.length; j < clen; j++) {   //  all foods[i] are tested against cheddar, then gouda, etc...
       if (foods[i] === cheese[j]) {      // until this condition is satisfied
         return cheese[j];            // this is where parent loop "breaks" (increments i and resets j)
      }
    }
  }                                // if both nested loops fails to meet criteria after increments reach i = flen and j = clen
  return "no cheese!";    // condition is cannot be met and foods array  has no cheese.
}
