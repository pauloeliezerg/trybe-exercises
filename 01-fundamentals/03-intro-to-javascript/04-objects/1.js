const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
  ],
};

// exercise 1
console.log(
  `${reader.name} ${reader.lastName}'s favorite book is called ${reader.favoriteBooks[0].title}`,
);

// exercise 2
let newBook = {
  title: "Harry Potter e o Prisioneiro de Azkaban",
  author: "JK Rowling",
  publisher: "Rocco",
};

const addFavoritBook = (reader, book) => reader.favoriteBooks.push(book);

addFavoritBook(reader, newBook);

// exercise 3
console.log(
  `${reader.name} has ${reader.favoriteBooks.length} favorite book${
    reader.favoriteBooks.length > 1 ? "s" : ""
  }`,
);
