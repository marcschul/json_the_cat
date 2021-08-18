const request = require('request');
const input = process.argv.slice(2);
const url = 'https://api.thecatapi.cm/v1/breeds/search?q=' + input;

request(url, (error, response, body) => {
  if (error !== null) {
    console.log('error: ', error);
    return;
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log('Breed is not found');
  } else {
    console.log(data[0].description);
  }
});