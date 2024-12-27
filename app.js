const APIkey = "f8ec834aba4ac0e0266b3ea414d6a6fc"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp = document.getElementById(`temp`);
let wind = document.getElementById(`wind`);
let btn = document.getElementById(`btn`);
let input = document.querySelector(`input`);
let des = document.getElementById(`des`)
let city = document.getElementById(`city`);
let humi = document.getElementById(`humi`);
let icon = document.querySelector(`.theme img`);

let get = async (place)=>{
    let response = await fetch(url + place + `&appid=${APIkey}`);
    let data = await response.json();
    console.log(data);
    temp.innerHTML = Math.floor( data.main.temp)+"°c";
    wind.innerText = Math.floor(data.wind.speed)+"Km/h";
    des.innerHTML = data.weather[0].main;
    city.innerHTML = data.name;
    humi.innerHTML = data.main.humidity;

   if(data.weather[0].main == "Clouds"){
    icon.src = "images/clouds.png"
   }else if(data.weather[0].main == "Clear"){
      icon.src = "images/clear.png"
   }else if(data.weather[0].main == "Rain"){
    icon.src = "images/rain.png"
   }else if(data.weather[0].main == "Drizzle"){
    icon.src = "images/drizzle.png"
   }else if(data.weather[0].main == "Mist"){
    icon.src = "images/mist.png"
   }else if(data.weather[0].main == "Snow"){
    icon.src = "images/snow.png"
   }else{
     icon.src = "images/clouds.png"
   }
}

btn.addEventListener("click",()=>{
    get(input.value);
});

input.addEventListener("keypress",(e)=>{
  if(e.key == "Enter"){
    get(input.value);
  }
})