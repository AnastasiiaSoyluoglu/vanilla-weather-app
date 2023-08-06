function displayTemperature(response){
  console.log(response.data)
  let temperatureElement=document.querySelector("#temperature");
  let cityElement=document.querySelector("#city");
  let descriptionElement=document.querySelector("#description");
  let humidityElement =document.querySelector("#humidity");
  let windElemenet= document.querySelector("#wind");


  temperatureElement.innerHTML=Math.round(response.data.main.temp);
  cityElement.innerHTML= response.data.name;
  descriptionElement.innerHTML=response.data.weather[0].description;
  humidityElement.innerHTML=response.data.main.humidity;
  windElemenet.innerHTML= Math.round(response.data.wind.speed);
}


let apiKey="81cd692b3e95836375773084a629827f";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
