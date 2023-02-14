const moons = [
  { name: "Luna", planet: "Earth", distanceFromPlanetInKm: 384400 },
  { name: "Deimos", planet: "Mars", distanceFromPlanetInKm: 23460 },
  { name: "Phobos", planet: "Mars", distanceFromPlanetInKm: 9380 },
  { name: "Ganymede", planet: "Jupiter", distanceFromPlanetInKm: 1070000 },
  { name: "Io", planet: "Jupiter", distanceFromPlanetInKm: 421600 },
  { name: "Europa", planet: "Jupiter", distanceFromPlanetInKm: 670900 },
];

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring to assign the `name` and `planet` variables.

  You should not need to make any other changes to the code.
*/
const organizeMoonsByPlanet = (moons) => {
  const result = {};
  for (let moon of moons) {
   const {name, planet } = moon
    if (result[planet]) {
      result[planet].push(name);
    } else {
      result[planet] = [name];
    }
  }
  return result;
 
}
// removed the word function and using arrow syntax set function name to a variable equal to arguments, then arrow, then object destructed to assign variable name and planet.  


/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring and the rest operator to assign the `closest` and `rest` variables.

  You should not need to make any other changes to the code.
*/
const getClosestToPlanet = (moons) => {
let [closest, ...rest] = moons
  for (let moon of rest) {
    if (moon.distanceFromPlanetInKm < closest.distanceFromPlanetInKm) {
      closest = moon;
    }
  }

  return closest.name;

}

// remove function and using arrow syntax set function to variable using const equal to argument, then arrow, then object destructed to assign closest and rest variables using spread operator. I had to set object destructing to let because closest was being redeclared further in the function. 

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Set the default value of `distanceFromPlanetInKm` to "Unknown" as part of the function signature.
  - Use object shorthand to create the new object.

  You should not need to make any other changes to the code.
*/
const createMoon = (name, planet, distanceFromPlanetInKm = "Unknown") => {
  if (!name || !planet) {
    return "Name and planet are required.";
  }

  distanceFromPlanetInKm = distanceFromPlanetInKm || "Unknown";

  return {
    name,
    planet,
    distanceFromPlanetInKm,
  };
}
// removed function keyword and using arrow syntax replaced with const and set to arguments, changed distanceFromPlanetInKm to unknown (default parameters), then removed values from the keys being returned using object short hand.

module.exports = {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
};
