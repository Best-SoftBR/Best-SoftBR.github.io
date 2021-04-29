var map = L.map('mapid').setView([-6.887849, -38.543479], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2xpbnNtYW4yMSIsImEiOiJjazFnb3Vrb2cwZGgwM2dzMGxub3dlcTZuIn0.T_yu-pLJjGsXNgVQA1G9Jw'
}).addTo(map);

let markerIcon = L.icon({
    iconUrl: 'images/marker.png',

    iconSize:[35, 35],
});

L.marker([-6.887849, -38.543479], {customId:"56", icon: markerIcon}).addTo(map).on('click', RunFilial);
L.marker([-7.146604, -34.841089], {icon: markerIcon}).addTo(map).on('click', RunFilial);
L.marker([-6.765757, -38.228561], {icon: markerIcon}).addTo(map).on('click', RunFilial);
L.marker([-3.755840, -38.546759], {icon: markerIcon}).addTo(map).on('click', RunFilial);

function RunFilial(e) {
  if (e.latlng['lat'] == -6.887849) {
    document.getElementById('titleED').innerHTML = "Best Soft - Cajazeiras-PB"
    document.getElementById('ed').innerHTML = "Endereço: Rua Protásio de Sousa Lima, Número 303 - Jardim Oásis"
    document.getElementById('tel').innerHTML = "Telefone: (83) 9 9943-0272"
    document.getElementById('email').innerHTML = "E-mail: cajazeiras@best_soft.com"

    document.getElementById('dados').style.display = "block";
    document.getElementById('filiaisShow').style.display = "block";
  }
  else if(e.latlng['lat'] == -7.146604) {
    document.getElementById('titleED').innerHTML = "Best Soft - João Pessoa-PB"
    document.getElementById('ed').innerHTML = "Endereço: R. Bancário Manoel Geraldo da Silva, 224 - Bancários"
    document.getElementById('tel').innerHTML = "Telefone: (83) 9 9933-2352"
    document.getElementById('email').innerHTML = "E-mail: joao-pessoa@best_soft.com"

    document.getElementById('dados').style.display = "block";
    document.getElementById('filiaisShow').style.display = "block";
  }
  else if(e.latlng['lat'] == -6.765757) {
    document.getElementById('titleED').innerHTML = "Best Soft - Sousa-PB"
    document.getElementById('ed').innerHTML = "Endereço: R. Sinfrônio Nazaré, 120 - Maria Lourdes S Meir"
    document.getElementById('tel').innerHTML = "Telefone: (83) 9 9463-3382"
    document.getElementById('email').innerHTML = "E-mail: sousa@best_soft.com"

    document.getElementById('dados').style.display = "block";
    document.getElementById('filiaisShow').style.display = "block";
  }
  else{
    document.getElementById('titleED').innerHTML = "Best Soft - Fortaleza-CE"
    document.getElementById('ed').innerHTML = "Endereço: Rua Frei Orlando, 176-300 - Bom Futuro"
    document.getElementById('tel').innerHTML = "Telefone: (88) 9 9523-2472"
    document.getElementById('email').innerHTML = "E-mail: fortaleza@best_soft.com"

    document.getElementById('dados').style.display = "block";
    document.getElementById('filiaisShow').style.display = "block";
  }
  map.setView(e.latlng, 19);
}

function ResetMap() {
  map.setView([-6.887849, -38.543479], 6);
  document.getElementById('dados').style.display = "none"
}
