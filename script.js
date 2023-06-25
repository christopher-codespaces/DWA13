// Exercise 1
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Using forEach to log each name to the console
names.forEach((name) => {
  console.log(name);
});

// Using forEach to log each name with a matching province to the console
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Using map to transform the province names to uppercase
const uppercaseProvinces = provinces.map((province) => {
  return province.toUpperCase();
});
console.log(uppercaseProvinces);

// Using map to get the length of each name
const nameLengths = names.map((name) => {
  return name.length;
});
console.log(nameLengths);

// Using sort to alphabetically sort the provinces
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Using filter to remove provinces with the word 'Cape' and returning the count of remaining provinces
const filteredProvinces = provinces.filter((province) => {
  return !province.includes('Cape');
});
console.log(filteredProvinces.length);

// Using map and includes to create a boolean array indicating whether a name contains 'S'
const containsS = names.map((name) => {
  return name.includes('S');
});
console.log(containsS);

// Using reduce to create an object that pairs each name with its corresponding province
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);


// Exercise 2
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Using forEach to log each product name to the console
products.forEach((product) => {
  console.log(product.product);
});

// Using filter to filter out products with names longer than 5 characters
const filteredProducts = products.filter((product) => {
  return product.product.length <= 5;
});
console.log(filteredProducts);

// Using filter, map, and reduce to calculate the total price of the products
const totalPrice = products
  .filter((product) => product.price !== '' && !isNaN(parseFloat(product.price)))
  .map((product) => parseFloat(product.price))
  .reduce((sum, price) => sum + price, 0);
console.log(totalPrice);

// Using reduce to concatenate all product names into a single string
const concatenatedNames = products.reduce((str, product, index) => {
  if (index === 0) {
    return product.product;
  } else if (index === products.length - 1) {
    return str + ' and ' + product.product;
  } else {
    return str + ', ' + product.product;
  }
}, '');
console.log(concatenatedNames);

// Using reduce, Math.max, and Math.min to find the highest and lowest priced items
const prices = products
  .filter((product) => product.price !== '' && !isNaN(parseFloat(product.price)))
  .map((product) => parseFloat(product.price));

const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
const highestProduct = products.find((product) => parseFloat(product.price) === highestPrice).product;
const lowestProduct = products.find((product) => parseFloat(product.price) === lowestPrice).product;
console.log(`Highest: ${highestProduct}. Lowest: ${lowestProduct}`);

// Using Object.entries and reduce to recreate the object with modified keys
const modifiedObject = Object.entries(products).reduce((obj, [key, value]) => {
  const modifiedKey = key === 'product' ? 'name' : 'cost';
  obj[modifiedKey] = value;
  return obj;
}, {});
console.log(modifiedObject);
