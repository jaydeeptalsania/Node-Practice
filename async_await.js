
const superagent = require('superagent');

async function fetchDogs(){
    let data = await superagent.get('https://dog.ceo/api/breeds/list/all');
    data = data.body.message;
      console.log(data);
      console.log("two");
}

console.log("one");
fetchDogs();
console.log("three");