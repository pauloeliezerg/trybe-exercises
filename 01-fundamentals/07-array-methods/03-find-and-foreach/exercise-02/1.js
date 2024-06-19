const cartoons = [
  { title: "Tom & Jerry", ageRating: "Livre" },
  { title: "Scooby-Doo", ageRating: "Livre" },
  { title: "Looney Tunes", ageRating: "Livre" },
  { title: "The Simpsons", ageRating: 12 },
  { title: "Avatar: The Last Airbender", ageRating: "Livre" },
  { title: "Pokémon", ageRating: "Livre" },
  { title: "Dragon Ball Z", ageRating: 12 },
  { title: "Adventure Time", ageRating: "Livre" },
  { title: "Gravity Falls", ageRating: "Livre" },
  { title: "Teen Titans Go!", ageRating: "Livre" },
];

// 1. implement the addGender function that adds the “gender: “Animation”” property to each object in the cartoon array
const addGender = () =>
  cartoons.forEach((cartoon) => (cartoon.gender = "Animation"));
