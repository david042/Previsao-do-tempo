window.onload = function(){
  const cidade = document.querySelector("#cidade");
  const botao = document.querySelector("#botao");
  const temp = document.querySelector("#temp");
  const description = document.querySelector("#description");
  const city = document.querySelector("#city");
  const humidity = document.querySelector("#humidity");
  const wind_speedy = document.querySelector("#wind_speedy");
  const date = [];
  const weekday = [];
  const max = [];
  const min = [];
  const prevDescription = [];

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

        for(let i = 0; i < 5; i++){
          date[i] = document.querySelector(`#date${i}`);
          weekday[i] = document.querySelector(`#weekday${i}`);
          max[i] = document.querySelector(`#max${i}`);
          min[i] = document.querySelector(`#min${i}`);
          prevDescription[i] = document.querySelector(`#prevDescription${i}`);

          date[i].innerHTML = data['results']['forecast'][i]['date'];
          weekday[i].innerHTML = data['results']['forecast'][i]['weekday'];
          max[i].innerHTML = data['results']['forecast'][i]['max'];
          min[i].innerHTML = data['results']['forecast'][i]['min'];
          prevDescription[i].innerHTML = data['results']['forecast'][i]['description'];
        }
      });
    });
  })
}