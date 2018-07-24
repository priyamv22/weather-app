const argv=require('yargs').argv;
const request=require('request');

let apikey ='703c71ff250bfd14be54fed789db2656';


let city = argv.c || 'Boston';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${apikey}`


request(url, function (err, response, body) {
  if (err){
    console.log('error:', error);

  }
else {
  let weather = JSON.parse(body)
  let message = `It's ${weather.main.temp}dregees in ${weather.name}!`;
  console.log(message);
}

});
