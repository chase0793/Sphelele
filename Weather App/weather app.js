let weather ={
    "apiKey": "94dc8562c9fca8d26a1cae847e4dc270",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey
        )
        .then ((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
const{name} = data;
const {icon, description} = data.weather[0];
const{temp, humidty} = data.main;
const{speed}= data.wind;
console.log(name,icon,description,temp,humidty,speed)
document.querySelector(".city").innerText = "Weather in" + name;
document.querySelector(".description").innerText = description;
document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
document.querySelector(".temp").innerText = temp + "C";
document.querySelector(".humidity").innerText = "Humidity:" + humidty + "%";
document.querySelector(".wind speed").innerText = "wind speed:" + speed + "km/ph";

},
search: function () {
    // const city = document.querySelector(".search").value;
    this.fetchWeather(document.querySelector(".search-bar").value)
}
};

document.querySelector(".search button").addEventListener("click", function (){
weather.search();
})

