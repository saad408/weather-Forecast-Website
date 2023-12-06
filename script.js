const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-bar');
const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


const allCities = async function(city){
    
    const APIkaData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08082004aa6e275704d03f347989d48b`)
    if(!APIkaData.ok) throw new Error(cityName.innerHTML= 'Please Enter a valid city')
    const data =await APIkaData.json()
    cityName.innerHTML = data.name;

    // getting temperature and converting it into celcius
    const Ctemp = Math.round(data.main.temp - 273); 
    temperature.innerHTML = `${Ctemp}°C`;

    //updating wind speed
    const windSpeedValue = Math.round(data.wind.speed);
    windSpeed.innerHTML = `Wind Speed: ${windSpeedValue} km/h`

    //updating humidity
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    // Weather picture update
    if(data.weather[0].main == 'Clear') weatherIcon.src = `images/clear.png`
    else if(data.weather[0].main == 'Haze') weatherIcon.src = `images/drizzle.png`
    else if(data.weather[0].main == 'Clouds') weatherIcon.src = `images/clouds.png`
    else if(data.weather[0].main == 'Fog') weatherIcon.src = `images/mist.png`
    else document.querySelector('.weather-icon').src = `images/clouds.png`
}

searchButton.addEventListener('click', function(){
    allCities(searchBar.value);
})
document.addEventListener('keyup', function(e){
    if(e.key == 'Enter') allCities(searchBar.value)
})