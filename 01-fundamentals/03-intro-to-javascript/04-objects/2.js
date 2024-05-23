const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// exercise 1
const customerInfo = (fullOrder) => {
  return `Hello, ${order.order.delivery.deliveryPerson}, delivery to: ${order.name}, Cellphone: ${order.phoneNumber}, ${order.address.street}, Number: ${order.address.number}, AP: ${order.address.apartment}.`;
};

// exercise 2
const orderModifier = (fullOrder) => {
  fullOrder.name = "Luiz Silva";
  fullOrder.payment.total = 50;

  let pizzas = Object.keys(fullOrder.order.pizza).join(", ");
  let drink = fullOrder.order.drinks.coke.type;

  return `Hello, ${
    order.order.delivery.deliveryPerson
  }, the total value of your order of ${pizzas} and ${drink} is R$ ${fullOrder.payment.total.toFixed(
    2,
  )}`;
};

console.log(orderModifier(order));
