const songs = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

// 1. use find to find a song with an id equal to '31031685', if it exists
console.log(songs.find((song) => song.id === "31031685"));

const contacts = [
  { name: "João", phone: "123456789" },
  { name: "Maria", phone: "987654321" },
  { name: "Pedro", phone: "456123789" },
  { name: "Ana", phone: "789456123" },
  { name: "Carlos", phone: "321654987" },
  { name: "Mariana", phone: "654123987" },
  { name: "Lucas", phone: "987321654" },
  { name: "Laura", phone: "123789456" },
  { name: "Tiago", phone: "789123456" },
  { name: "Beatriz", phone: "456789123" },
];

// 2. you must develop a function that searches for a telephone contact in a list; your task is to implement the searchContact(contacts, name) function, which receives a list of contacts and the name of the contact to be found; if the contact is found, return an object with all the contact information using spread operator; if the contact is not found, return the message “Contact not found”
const searchContact = (contacts, name) => {
  const foundContact = contacts.find((contact) => contact.name === name);
  if (foundContact === undefined) return "Contact not found";
  return { ...foundContact };
};
