// console.log("Data Analytics");
const tea = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTeas = [];

// console.log(tea);
for (let i = 0; i < tea.length; i++) {
  if (tea[i] != "chai") {
    selectedTeas.push(tea[i]);
  } else {
    break;
  }
}

// console.log(selectedTeas);
const cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

// console.log(visitedCities);
