// index.js
const { fakerBr } = require('js-brasil');

module.exports = () => {
  const data = { users: [], products: [] };
  // Create 1000 users
  for (let i = 0; i < 95; i++) {
    data.users.push({ id: i, name: i, lastname: `${i}user` });
  }

  for (let i = 0; i < 95; i++) {
    data.products.push({
      id: i,
      name: `Produto - ID:${i}`,
      price: fakerBr.number().toString(),
      suport_email: fakerBr.email(),
    });
  }

  return data;
};
