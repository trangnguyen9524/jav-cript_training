//Exercise 1: calculate the total value of the orders
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];
function getTotal(orders) {
  var sum = 0;
  for (var key in orders) {
    sum += orders[key].price;
  }
  return sum;
}
// Expected results:
getTotal(orders); // Output: 8700000

//Exercise 2: for-in loop exercise
function run(object) {
  var result = [];
  for (var key in object) {
    result.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return result;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

//Exercise 3: use filter method
const sports = [
  {
    name: "Bóng rổ",
    like: 6,
  },
  {
    name: "Bơi lội",
    like: 5,
  },
  {
    name: "Bóng đá",
    like: 10,
  },
];
function getMostFavoriteSport(array) {
  return array.filter((sports) => sports.lile > 5);
}
// expected result
console.log(getMostFavoriteSport(sports));
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

//Exercise 4: use eeduce method
var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];
function getTotalGold(listSport) {
  var totalGoldMedal = listSport.reduce(function (goldMedalCount, sportValue) {
    return goldMedalCount + sportValue.gold;
  }, 0);

  return totalGoldMedal;
}
// Expected results:
console.log(getTotalGold(sports)); // Output: 23

//Exercise 5: Use Reduce method
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];
function calculateRating(list) {
  let lists = list.filter(function (movie) {
    return movie.Director == "Christopher Nolan";
  });

  const avgTotal = lists.reduce((a, b) => {
    return a + +b.imdbRating;
  }, 0);

  return avgTotal / lists.length;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
