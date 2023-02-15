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
// This code is organizing the moons by planet. It is creating an empty object called result. Then it is looping through the moons array and creating a new variable called moon. Then it is creating a new variable called name and planet and assigning it to the moon variable. Then it is checking if the result object has a key that matches the planet variable. If it does, it is pushing the name variable into the array. If it doesn't, it is creating a new key in the result object and assigning it to the planet variable and creating a new array with the name variable. Then it is returning the result object.

const organizeMoonsByPlanet = (moons) => {
  const result = {};
  for (let moon of moons) {
    const {name, planet} = moon

    if (result[planet]) {
      result[planet].push(name);
    } else {
      result[planet] = [name];
    }
}
return result;
  }

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring and the rest operator to assign the `closest` and `rest` variables.

  You should not need to make any other changes to the code.
*/
// This code is using the spread operator to get the rest of the moons.
// It is then using a for loop to iterate through the rest of the moons.
// It is then using an if statement to check if the distance from the planet is less than the closest moon.
// If it is, it will set the closest moon to the moon that is closer.
// It will then return the name of the closest moon.
const getClosestToPlanet= (moons) => {
  let[ closest, ...rest ] = moons;

  for (let moon of rest) {
    if (moon.distanceFromPlanetInKm < closest.distanceFromPlanetInKm) {
      closest = moon;
    }
  }
  return closest.name;
}

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Set the default value of `distanceFromPlanetInKm` to "Unknown" as part of the function signature.
  - Use object shorthand to create the new object.

  You should not need to make any other changes to the code.
*/
// { name: 'Moon', planet: 'Earth', distanceFromPlanetInKm: 'Unknown' }

// The function createMoon takes in 3 parameters, name, planet, and distanceFromPlanetInKm.
// The distanceFromPlanetInKm parameter has a default value of "Unknown".
// The function returns an object with the name, planet, and distanceFromPlanetInKm properties.
// The function also has a conditional that checks if the name and planet parameters are truthy.
// If they are not, the function returns "Name and planet are required.".
// The function is invoked with the moon variable and the name and planet parameters are passed in.
// The distanceFromPlanetInKm parameter is not passed in, so the default value of "Unknown" is used.
// The moon variable is logged to the console.
const createMoon = (name, planet, distanceFromPlanetInKm = "Unknown") => {
  if (!name || !planet) {
    return "Name and planet are required.";
  }
  distanceFromPlanetInKm = distanceFromPlanetInKm;
  return {
    name,
    planet,
    distanceFromPlanetInKm,
  };
}

module.exports = {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
};
