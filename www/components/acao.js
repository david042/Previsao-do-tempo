window.onload = function(){
  const cidade = document.querySelector("#cidade");
  const botao = document.querySelector("#botao");
  const id = document.querySelector("#id");

  botao.addEventListener("click", function(){
    fetch(`https://api.hgbrasil.com/weather?key=203f1c51&city_name=${cidade.value}`,{
      method: "get",
      mode: "cors",
      cache: "default"
    }).then(response=>{
      response.json().then(data=>{
        id.innerHTML = data['results']['city'];
      });
    });
  })
}