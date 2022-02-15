function generate(userOrders, userIds, orderIds, userData, orderData) {
  const res = [];
  for (let i = 0; i < userOrders.length; i++) {
    res.push({
      user: {
        id: userIds[i],
        name: Object.getOwnPropertyDescriptor(userData, userIds[i]).value,
      },
      orders: userOrders
        .filter((userOrder) => userOrder.userId === userIds[i])[0]
        .orderIds.map((id) => {
          return {
            id: id,
            ...Object.getOwnPropertyDescriptor(orderData, id).value,
          };
        }),
    });
  }
  return JSON.stringify(res);
}

// test case
const userIds = ["U01", "U02", "U03"];
const orderIds = ["T01", "T02", "T03", "T04"];

const userOrders = [
  { userId: "U01", orderIds: ["T01", "T02"] },
  { userId: "U02", orderIds: [] },
  { userId: "U03", orderIds: ["T03"] },
];

const userData = { U01: "Tom", U02: "Sam", U03: "Joh" };
const orderData = {
  T01: {
    name: "A",
    price: 499,
  },
  T02: {
    name: "B",
    price: 599,
  },
  T03: {
    name: "C",
    price: 699,
  },
  T04: {
    name: "D",
    price: 799,
  },
};

console.log(generate(userOrders, userIds, orderIds, userData, orderData));
