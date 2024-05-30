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

// 1. omplete the customerInfo() function so that your return is: 'Hello, Ana Silveira, delivery to: Rafael Andrade, Cellphone: 11-98763-1416, Rua das Flores, Number: 389, AP: 701.'.
const customerInfo = (fullOrder) => {
  return `Hello, ${order.order.delivery.deliveryPerson}, delivery to: ${order.name}, Cellphone: ${order.phoneNumber}, ${order.address.street}, Number: ${order.address.number}, AP: ${order.address.apartment}.`;
};

// 2. Complete the orderModifier() function so that its return is: 'Hello, Luiz Silva, the total value of your order of margherita, pepperoni and Coca-Cola Zero is R$50.00.'.
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
