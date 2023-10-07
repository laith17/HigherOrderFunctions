//* Q1:
// function getIndex(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// let array = [5, 3, 6, 8, 1, 9, 7];
// console.log(getIndex(array, 1));

//* Q2:
// function between(){

// }

//* Q3:
// function removeDuplicates(arr) {
//   let newArray = [];
//   arr.forEach((item) => {
//     if (!newArray.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }

// let array = [1, 5, 2, 3, 1, 6, 1, 23, 5, 6, 1, 2, 5, 6, 1];
// result = removeDuplicates(array);
// console.log(result);

//* Q4:
// function avg(arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   sum = sum / 2;
//   return sum;
// }

// let array = [5, 7, 3, 6, 8, 1, 10];
// console.log(avg(array));

//* Q5:
// function powArray(arr) {
//? Using for loop
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow(arr[i], 2);
//   }
//   return arr;
//? Using forEach
//   let newArray = [];
//   arr.forEach((item) => {
//     newArray.push(Math.pow(item, 2));
//   });
//   return newArray;
//? Using map
//   let newArray = arr.map((number) => Math.pow(number, 2));
//   return newArray;
// }

// let array = [2, 4, 6];
// result = newArray(array);
// console.log(result.toString());

//* Q6:
// function evenOrOdd(arr) {
//   let newArray = arr.map((number) => {
//     if (number % 2 === 0) {
//       return "even";
//     } else if (isNaN(number)) {
//       return "N/A";
//     } else {
//       return "odd";
//     }
//   });
//   return newArray;
// }

// let array = ["laith",1, 2, 3, 4, 5, 6, 7, 8, 9, "almajali"];
// let result = evenOrOdd(array);
// console.log(result);

//* Q7:
// function fizzbuzz(arr) {
//   let newArray = arr.map((number) => {
//     if (number % 3 === 0 && number % 5 === 0) {
//       return "Fizz Buzz";
//     } else if (number % 5 === 0) {
//       return "Buzz";
//     } else if (number % 3 === 0) {
//       return "Fizz";
//     } else {
//       return number;
//     }
//   });
//   return newArray;
// }

// let array = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 15];
// let result = fizzbuzz(array);
// console.log(result);

//* Q8:
// const array = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];

// array.forEach((item)=>{
//     console.log(item);
// })

////////////////////////////////////////////////////!

const newSeries = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

////////////////////////////////////////////////////!

//* Q9:
// function projectSeries(seriesArray) {
//   const result = [];

//   seriesArray.forEach((series) => {
//     let projection = {
//       id: series.id,
//       title: series.title,
//     };
//     result.push(projection);
//   });

//   return result;
// }

// const projectedArray = projectSeries(newSeries);
// console.log(projectedArray);

//* Q10:
// function projectSeries(seriesArray) {
//   const result = [];

//   seriesArray.map((series) => {
//     let projection = {
//       id: series.id,
//       title: series.title,
//     };
//     result.push(projection);
//   });

//   return result;
// }

// const projectedArray = projectSeries(newSeries);
// console.log(projectedArray);

//* Q11:
// function projectSeries(seriesArray) {
//   const result = [];

//   seriesArray.filter((series) => {
//     if (series.rating < 5.0) {
//       let projection = {
//         id: series.id,
//         title: series.title,
//         boxart: series.boxart,
//         uri: series.uri,
//         rating: series.rating,
//         bookmark: series.bookmark,
//       };
//       result.push(projection);
//     }
//   });

//   return result;
// }

// const projectedArray = projectSeries(newSeries);
// console.log(projectedArray);

//* Q12:
// const progLang = ["Java", "JavaScript", "Python", "C++", "PHP"];

// const longestStr = progLang.reduce(function (acc, cur) {
//   let max = acc;

//   if (acc.length < cur.length) {
//     max = cur;
//   }
//   return max;
// });

// console.log(longestStr);

//* Q13:
let pokemonData = [
  {
    game_index: 76,
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/",
    },
  },
];

// function displayName(arr) {
//   return arr.reduce((names, pokemon) => {
//     names.push(pokemon.version.name);
//     return names;
//   }, []);
// }
// console.log(displayName(pokemonData));

//* Q14:

//^ a)
//? Output: "Hi Coach ! Rawan"

//? In this code, you have an object employee with a sayHi method. When you call employee.sayHi(), it logs the string "Hi Coach ! " followed by the firstName property of the employee object, which is "Rawan."

//^ b)
//? Output: "Car owner? undefined"

//? In this code, you have an object employee with an info object and a printInfo method. When you call employee.printInfo(), it logs the string "Car owner? " followed by this.hasCar. However, hasCar is not directly defined in the employee object; it's inside the info object. Therefore, this.hasCar is undefined, resulting in "Car owner? undefined."

//^ c)
//? Output: There is no output

//? In this code, when you call employee.info.printAddress(), it returns the value of the address property from the data object within the info object, which is "Zarqa." The function doesn't explicitly print the value, but it returns it.
