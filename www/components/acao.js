window.onload = function(){
  const cidade = document.querySelector("#cidade");
  const botao = document.querySelector("#botao");
  const temp = document.querySelector("#temp");
  const description = document.querySelector("#description");
  const city = document.querySelector("#city");
  const humidity = document.querySelector("#humidity");
  const wind_speedy = document.querySelector("#wind_speedy");

  botao.addEventListener("click", function(){
    fetch(`https://api.hgbrasil.com/weather?key=203f1c51&city_name=${cidade.value}`,{
      method: "get",
      mode: "cors",
      cache: "default"
    }).then(response=>{
      response.json().then(data=>{
        temp.innerHTML = data['results']['temp'];
        description.innerHTML = data['results']['description'];
        humidity.innerHTML = data['results']['humidity'];
        wind_speedy.innerHTML = data['results']['wind_speedy'];
      });
    });
  })
}
/*
temp
description
city
humidity
wind_speedy
*/