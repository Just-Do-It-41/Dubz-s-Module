const seedData = require('../exampleDataShoes.js');
const { Shoes } = require('./index.js');

const seederFunction = () => {
  seedData.forEach((data) => {
    Shoes.create(data);
  });
};

seederFunction();
