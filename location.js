
  // Assuming this code is inside an async function or an immediately-invoked async function
(async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const allCountries = await response.json();

        allCountries.forEach(country => {
            const Countryname = country.name.common;

            result.innerHTML += `
            <div class="card c1 me-2 ms-2">
                <div class="row mt-3">
                    <div class="col">
                        <h1 class="text-center" style="font-size: 20px;">${Countryname}</h1>
                        <img src="${country.flags.png}" alt=""> <br>
                        <a href="${country.maps.googleMaps}" target="_blank">Click to open in Map</a>
                    </div>
                </div>
            </div>`;
        });
    } catch (err) {
        console.log(err);
    }
})();
const showResult=async()=>{
    try{const response=await fetch("https://restcountries.com/v3.1/all")
    const allCountries=await response.json()
    const randomCount=allCountries[Math.floor(Math.random()*allCountries.length)]
    const Countryname=randomCount.name.common
    const capital=randomCount.capital

    cntryname.innerHTML=`${Countryname}`
    flagimg2.innerHTML=`<img src="${randomCount.flags.png}" alt=""><br><a href="${randomCount.maps.googleMaps}" target="_blank">Click to open in Map</a>` 
}catch(err){
    console.log(err);
}
}
const searchResult = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const allCountries = await response.json();
        const cityName = city.value.toLowerCase(); // Assuming city is an input element

        // Find the country that matches the searched city name
        const matchingCountry = allCountries.find(country => country.name.common.toLowerCase() === cityName);

        if (matchingCountry) {
            const countryName = matchingCountry.name.common;
            
            // Assuming cntryname and flagimg2 are HTML elements
            cntryname.innerHTML = countryName;
            flagimg2.innerHTML = `<img src="${matchingCountry.flags.png}" alt=""><br><a href="${matchingCountry.maps.googleMaps}" target="_blank">Click to open in Map</a>`;
        } else {
            // Handle case when no matching country is found
            cntryname.innerHTML = "Country not found";
            flagimg2.innerHTML = "";
        }
    } catch (err) {
        console.log(err);
    }
}

if(localStorage.getItem('username'))
{
    logout1.style.display='block'
}