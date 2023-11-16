

const apiKey = "a66be612c21a7791d4431075f204de9b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="   


const searchInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-btn")
const searchIcon = document.getElementById("main-icon")


// fetch data form api

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    var data = await response.json()

    console.log(data)
    
    // document.querySelector(".tempr").innerHTML

    // desplay data
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".tempr").innerHTML = Math.round(data.main.temp) + "*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";



    // 
    if(data.weather[0].main == "Clouds"){
        searchIcon.src = "/icon/cloudy.png"
        searchIcon.src = "./icon/cloudy.png"
        searchIcon.src = "icon/cloudy.png"
    }else if(data.weather[0].main == "Rain"){
        searchIcon.src = "icon/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        searchIcon.src = "icon/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        searchIcon.src = "icon/mist.png"
    }else if(data.weather[0].main == "Haze"){
        searchIcon.src = "icon/mist.png"
    }
    
}

let outputWrap = document.querySelector(".weather-output-wrap")

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value)
    
    if(outputWrap.style.display = "none" || searchInput.value.length > 0 ){
        outputWrap.style.display = "flex"
    }else{
        outputWrap.style.display = "none"
    }
})

searchInput.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        e.preventDefault();
        searchBtn.click();
    }
})


searchInput.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        e.preventDefault();
        searchBtn.click();
    }
})

