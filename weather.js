const getweather = () => {
  search = city.value;
  fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${search}&apikey=bwWyfqcaR9mRtsGyX6qWLpEF6qnKmqjr`)
      .then((response) => {
          response.json().then((data) => {
              if (city.value) {
                  cityname.innerHTML = `${data.location.name}`;
                  console.log(data.timelines.minutely[0].values.temperature); // Assuming temperature is part of minutely data
                  tempmeas.innerHTML = `${data.timelines.minutely[0].values.temperature}<span class="celsious" style="font-size: 20px; font-weight: 900;"><i class="fa-solid fa-o ocelsius" style="font-size: 10px; font-weight: 900;"></i>C</span>`;
                  const currenttemp=data.timelines.minutely[0].values.temperature
                  // Get the current day
                  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                  const currentDate = new Date();
                  const currentDay = daysOfWeek[currentDate.getDay()];

                  day.innerHTML = currentDay;
                  

                  var currentTime = Math.floor(Date.now() / 1000);

                  rainlevel=data.timelines.minutely[0].values.rainIntensity


                 

                  if(currenttemp<0){
                    humid1.innerHTML=`Extremely Freezing Cold!!!`
                    tempimg1.src=`./images/freeze.png`
                    var currentLocElement = document.getElementById('currentloc1');
                    currentLocElement.style.backgroundImage = 'url(https://cff2.earth.com/uploads/2017/09/22134948/Climate-change-responsible-for-extreme-cold-during-the-winter.jpg)';
                    bar11.style.width=`70%`
                    bar12.style.width=`35%`
                    bar13.style.width=`50%`
                    bar14.style.width=`75%`
                    bar15.style.width=`100%`
                    bar16.style.width=`95%`
                    bar17.style.width=`65%`

                  }else if(currenttemp<18 && currenttemp>0){
                    humid1.innerHTML=`Feels Cloudy`
                    tempimg1.src=`./images/cloudy.png`
                    var currentLocElement = document.getElementById('currentloc1');
                    currentLocElement.style.backgroundImage = 'url(https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif)';
                    bar11.style.width=`70%`
                    bar12.style.width=`5%`
                    bar13.style.width=`20%`
                    bar14.style.width=`40%`
                    bar15.style.width=`100%`
                    bar16.style.width=`50%`
                    bar17.style.width=`89%`
                  }else if(currenttemp>18 && currenttemp<=30){
                    humid1.innerHTML=`Sunny Weather`
                    tempimg1.src=`./images/sun.png`
                    var currentLocElement = document.getElementById('currentloc1');
                    currentLocElement.style.backgroundImage = 'url(https://media1.tenor.com/m/PLqmB_SmXQMAAAAC/clouds-sky.gif)';
                    bar11.style.width=`70%`
                    bar12.style.width=`15%`
                    bar13.style.width=`30%`
                    bar14.style.width=`80%`
                    bar15.style.width=`950%`
                    bar16.style.width=`70%`
                    bar17.style.width=`59%`

                  }else{
                    humid1.innerHTML=`Extremely HOT!!!`
                    tempimg1.src=`./images/sun.png`
                    var currentLocElement = document.getElementById('currentloc1');
                    currentLocElement.style.backgroundImage = 'url(https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk=)';
                    bar11.style.width=`70%`
                    bar12.style.width=`5%`
                    bar13.style.width=`20%`
                    bar14.style.width=`40%`
                    bar15.style.width=`100%`
                    bar16.style.width=`50%`
                    bar17.style.width=`89%`


                  }

                   //2nd part
                   precipitation.innerHTML=`${data.timelines.minutely[0].values.precipitationProbability}%`
                   humidity.innerHTML=`${data.timelines.minutely[0].values.humidity}%`
                   wind.innerHTML=`${data.timelines.minutely[0].values.windSpeed}%`
                   sunrise.innerHTML=`${data.timelines.minutely[0].values.uvIndex}%`

                  // Loop through the data intervals
                  for (var interval of data.data.timelines[0].intervals) {
                      // Check if the interval start time matches the current time
                      if (interval.startTime === currentTime) {
                          // Get the temperature value in Celsius
                          var temperature = interval.values.temperature;
                          console.log(temperature);
                      }
                  }
                  
              }
          });
      });
};
if(localStorage.getItem('username'))
{
    logout1.style.display='block'
}