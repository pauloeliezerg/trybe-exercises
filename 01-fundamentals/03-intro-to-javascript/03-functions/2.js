// addCostumer function (string)
const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

function addCustomer(customer) {
  if (typeof customer !== "string")
    return "O parâmetro passado deve ser do tipo string";

  trybeBankCustomers.push(customer);
  return "Pessoa adicionada com sucesso!";
}
