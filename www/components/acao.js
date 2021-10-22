window.onload = function(){
  var cidade = document.querySelector("#cidade");
  var buscar = document.querySelector("#buscar");
  var city = document.querySelector("#city");
  var time = document.querySelector("#time");
  var temp = document.querySelector("#temp");
  var description = document.querySelector("#description");
  var humidity = document.querySelector("#humidity");
  var wind_speedy = document.querySelector("#wind_speedy");
  var sunrise = document.querySelector("#sunrise");
  var sunset = document.querySelector("#sunset");
  var date = [];
  var weekday = [];
  var max = [];
  var min = [];
  var prevDescription = [];

  buscar.addEventListener("click", function(){
    fetch(`https://api.hgbrasil.com/weather?key=203f1c51&city_name=${cidade.value}`,{
      method: "get",
      mode: "cors",
      cache: "default"
    }).then(response=>{
      response.json().then(data=>{
        city.innerHTML = data['results']['city'];
        time.innerHTML = data['results']['time'];
        temp.innerHTML = `${data['results']['temp']}°C`;
        description.innerHTML = data['results']['description'];
        humidity.innerHTML = `${data['results']['humidity']}%`;
        wind_speedy.innerHTML = data['results']['wind_speedy'];
        sunrise.innerHTML = data['results']['sunrise'];
        sunset.innerHTML = data['results']['sunset'];

        for(let i = 0; i < 5; i++){
          date[i] = document.querySelector(`#date${i}`);
          weekday[i] = document.querySelector(`#weekday${i}`);
          max[i] = document.querySelector(`#max${i}`);
          min[i] = document.querySelector(`#min${i}`);
          prevDescription[i] = document.querySelector(`#prevDescription${i}`);

          date[i].innerHTML = data['results']['forecast'][i]['date'];
          weekday[i].innerHTML = data['results']['forecast'][i]['weekday'];
          max[i].innerHTML = `${data['results']['forecast'][i]['max']}°C`;
          min[i].innerHTML = `${data['results']['forecast'][i]['min']}°C`;
          prevDescription[i].innerHTML = data['results']['forecast'][i]['description'];
        }
        for(let i = 0; i < 10; i++){
          date[i+5] = document.querySelector(`#date${i+5}`);
          weekday[i+5] = document.querySelector(`#weekday${i+5}`);
          max[i+5] = document.querySelector(`#max${i+5}`);
          min[i+5] = document.querySelector(`#min${i+5}`);
          prevDescription[i+5] = document.querySelector(`#prevDescription${i+5}`);

          date[i+5].innerHTML = data['results']['forecast'][i]['date'];
          weekday[i+5].innerHTML = data['results']['forecast'][i]['weekday'];
          max[i+5].innerHTML = `${data['results']['forecast'][i]['max']}°C`;
          min[i+5].innerHTML = `${data['results']['forecast'][i]['min']}°C`;
          prevDescription[i+5].innerHTML = data['results']['forecast'][i]['description'];
        }
      });
    });
  })
}