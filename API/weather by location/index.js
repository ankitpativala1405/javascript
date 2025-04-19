const getlocation=()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
  
      getWeather(lat,lon)
  
    })
  }
  
  getlocation()
  
  const getWeather = async (lat,lon) => {
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=94b46ca7cd7141acc5d25e22292b9cfb&units=metric`
    );
    let res = await req.json();
    console.log(res);
    uimaker(res);
  };
  
  const uimaker = (data) => {
    let temp = `
      <header>
        <h1>Weather Dashboard</h1>
        <p>🌍 ${data.name}, ${data.sys.country}</p>
      </header>
  
      <section class="current-weather">
        <div class="icon">⛅</div>
        <div class="info">
          <h2>${data.main.temp}°C</h2>
          <p>${data.weather[0].description}</p>
          <div class="details">
            <span>Humidity: ${data.main.humidity}%</span>
            <span>Wind: ${data.wind.speed} km/h</span>
            <span>Feels like: ${data.main.feels_like}°C</span>
          </div>
        </div>
      </section>
  
    `;
  
    document.getElementById("container").innerHTML = temp;
  }




  const getWeathername = async (cityName) => {
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
    );
    let res = await req.json();
    console.log(res);
    uimaker(res);
  };
  
  document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      let cityName = e.target.value;
      console.log(cityName);
      getWeathername(cityName);
    }
  });
  