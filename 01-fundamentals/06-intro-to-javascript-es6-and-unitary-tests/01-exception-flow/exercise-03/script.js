const clients = [
  {
    name: "João da Silva",
    age: 28,
    email: "joao.silva@gmail.com",
    phone: "(11) 5555-5555",
    address: {
      street: "Rua dos Lírios",
      number: 123,
      neighborhood: "Jardim Primavera",
      city: "São Paulo",
      state: "SP",
      cep: "01234-567",
    },
  },
  {
    name: "Maria Souza",
    age: 35,
    email: "maria.souza@hotmail.com",
    address: {
      street: "Rua dos Cravos",
      number: 456,
      neighborhood: "Copacabana",
      city: "Rio de Janeiro",
      state: "RJ",
      cep: "12345-678",
    },
  },
  {
    name: "Pedro Oliveira",
    age: 42,
    email: "pedro.oliveira@gmail.com",
    address: {
      street: "Rua das Margaridas",
      number: 789,
      neighborhood: "Boa Viagem",
      city: "Recife",
      state: "PE",
      cep: "23456-789",
    },
  },
  {
    name: "Ana Santos",
    age: 25,
    email: "ana.santos@gmail.com",
    phone: "(71) 5555-5555",
    address: {
      street: "Rua dos Girassóis",
      number: 1011,
      neighborhood: "Barra",
      city: "Salvador",
      state: "BA",
      cep: "34567-890",
    },
  },
  {
    name: "Luiz Costa",
    age: 32,
    email: "luiz.costa@hotmail.com",
    address: {
      street: "Rua das Acácias",
      number: 1213,
      neighborhood: "Centro",
      city: "Belo Horizonte",
      state: "MG",
      cep: "45678-901",
    },
  },
  {
    name: "Isabela Almeida",
    age: 37,
    email: "isabela.almeida@gmail.com",
    phone: "(21) 5555-5555",
    address: {
      street: "Rua das Hortênsias",
      number: 1415,
      neighborhood: "Botafogo",
      city: "Rio de Janeiro",
      state: "RJ",
      cep: "56789-012",
    },
  },
  {
    name: "Rafael Ferreira",
    age: 29,
    email: "rafael.ferreira@hotmail.com",
    address: {
      street: "Rua das Orquídeas",
      number: 1617,
      neighborhood: "Pinheiros",
      city: "São Paulo",
      state: "SP",
      cep: "67890-123",
    },
  },
];

// 1. the findPersonByName() function takes a name per parameter and returns the string: 'Recipient: Ana Santos. Address: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890'
// if the findPersonByName() function does not find people in the customer list, throw an exception with the message 'Person not found, try again'
const findPersonByName = (name) => {
  try {
    for (let index = 0; index < clients.length; index += 1) {
      const client = clients[index];
      const adress = client.address;

      if (client.name === name)
        return `Recipient: ${client.name}. Adress: ${adress.street}, ${adress.number}, ${adress.neighborhood}, ${adress.city} - ${adress.state}. CEP: ${adress.cep}`;
    }
    throw new Error("Person not found, try again");
  } catch (error) {
    return error.message;
  }
};

// 2. the findPersonByPosition() function receives a position (from the array) per parameter and returns a string with the person's name and email. Client: João da Silva. email: joao.silva@gmail.com
// if the findPersonByPosition() function does not find a person by position, throw an exception with the message 'Invalid position, try again'
const findPersonByPosition = (position) => {
  try {
    const client = clients[position];
    if (client) return `Client: ${client.name}. email: ${client.email}`;
    throw new Error("Invalid position, try again");
  } catch (error) {
    return error.message;
  }
};

// 3. the findPeopleByState function takes a state as a parameter and returns an array containing the names of the people who live in that state
// if the findPeopleByState function finds no people in the state, throw an exception with the message 'Oops, no people live in this state, try another one'
const findPeopleByState = (state) => {
  try {
    const clientsOfState = [];

    for (let index = 0; index < clients.length; index += 1) {
      const client = clients[index];

      if (client.address.state === state) clientsOfState.push(client.name);
    }
    if (clientsOfState.length) return clientsOfState;
    throw new Error("Oops, no people live in this state, try another one");
  } catch (error) {
    return error.message;
  }
};
