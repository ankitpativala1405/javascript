window.onload = () => {
  getData("https://disease.sh/v3/covid-19/all");
  loadCountryList();
};

async function getData(url) {
  let data = await (await fetch(url)).json();
  document.getElementById("cases").textContent = "Total Cases: " + data.cases;
  document.getElementById("deaths").textContent ="Total Deaths: " + data.deaths;
  document.getElementById("recovered").textContent ="Total Recovered: " + data.recovered;
}

document.getElementById("country-select").addEventListener("change", async () => {
    let selectedCountry = document.getElementById("country-select").value;
    let url = "";

    if (selectedCountry === "") {
      url = "https://disease.sh/v3/covid-19/all";
    } else {
      url = "https://disease.sh/v3/covid-19/countries/" + selectedCountry;
    }
    getData(url);
  });

//country function dropdown
async function loadCountryList() {
  let countryArray = await (await fetch("https://disease.sh/v3/covid-19/countries")).json();

  for (let i = 0; i < countryArray.length; i++) {
    let CountryList = countryArray[i];
    let option = document.createElement("option");
    option.value = CountryList.country;
    option.textContent = CountryList.country;
    document.getElementById("country-select").appendChild(option);
  }
}

