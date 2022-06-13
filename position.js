function finalPosition(moves) {
  let position = [0,0]
  for (const move of moves) {
    if (move === "north") {
      position[1]++;
    } else if (move === "west") {
      position[0]--;
    } else if (move === "south") {
      position[1]--;
    } else if (move === "east") {
      position[0]++;
    }
  }
  return position;
}

const directions = ['north', 'north', 'west', 'west', 'north', 'east','north'];
console.log(finalPosition(directions));