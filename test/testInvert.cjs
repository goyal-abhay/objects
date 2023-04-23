const revObj = require('../invert.cjs')
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
const result = revObj(testObject);
console.log(result);