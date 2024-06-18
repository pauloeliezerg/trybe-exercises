// 2. using the filter and array destructuring method, create a filterHighPlayers function that returns a new array containing only players with a height equal to or greater than 200 centimeters
const players = [
  { name: "Michael Jordan", height: 198, team: "Chicago Bulls" },
  { name: "LeBron James", height: 203, team: "Los Angeles Lakers" },
  { name: "Kobe Bryant", height: 198, team: "Los Angeles Lakers" },
  { name: "Stephen Curry", height: 191, team: "Golden State Warriors" },
  { name: "Kevin Durant", height: 211, team: "Brooklyn Nets" },
];

const filterHighPlayers = (array) =>
  array.filter((player) => player.height >= 200);
