//
const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

function addCustomers(customers, newCustomers) {
  for (index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] !== "string")
      return "Todos os valores precisam ser strings.";
    customers.push(newCustomers[index]);
  }

  return "Pessoas adicionada com sucesso!";
}

console.log(addCustomers(trybeBankCustomers, ["Lorem", "Ipsum"]));
