var faker = require('faker');

var database = { articles: []};

for (var i = 1; i<= 10; i++) {
  database.articles.push({
    id: i,
    title: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
  });
}

console.log(JSON.stringify(database));