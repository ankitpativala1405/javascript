// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric

let date = new Date();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const uiMaker = (data) => {
    let temp = ` <div class="w3-quarter">
  </div>
  <div class="caja_meteorologia_iz w3-quarter">
    <div>
      <h2>${daysOfWeek[date.getDay()]}</h2> 
      <p>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</p> 

      <h1 class="h1_left">${data.main.temp}°C</h1> 
      <h3 class="h3_left">${data.name}</h3>
    </div>
  </div>
  <div class="caja_meteorologia_de center w3-quarter"> 
    <table>
      <tbody>
        <tr>
          <th>HUMIDITY</th>
          <td>${data.main.humidity}</td>
        </tr>
        <tr>
          <th>WIND</th>
          <td>${data.wind.speed} km/h</td>
        </tr>
      </tbody>
      <tfoot>       
      </tfoot>
    </table>
    <div class="clima_Semana">
      <ul class="center">
        <li class="li_active">
          <span class="fas fa-sun fa-2x"></span> 
          <span>${daysOfWeek[date.getDay()]}</span> 
          <span class="span_temperature">${data.main.temp}°C</span> 
        </li>
        <li class="li_active_temp">
          <span class="fas fa-cloud-moon fa-2x"></span> 
          <span>${daysOfWeek[date.getDay()+1]}</span>
          <span class="span_temperature">21°C</span>
        </li>
        <li class="li_active_temp">
          <span class="fas fa-cloud-sun-rain fa-2x"></span> 
          <span>${daysOfWeek[date.getDay()+2]}</span>
          <span class="span_temperature">08°C</span>
        </li>
      </ul>
    </div>
    <div id="div_Form">
      <form>
        <input type="button" value="Change Location" class="change_Location center">
      </form>
    </div>
  </div>
  <div class="w3-quarter">
  </div>`;
    document.getElementById("output").innerHTML = temp;
  };
  const getWeather = async (cityName) => {
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
    );
    let res = await req.json();
    console.log(res);
    uiMaker(res);
  };
  
  document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      let cityName = e.target.value;
      console.log(cityName);
      getWeather(cityName);
    }
  });
