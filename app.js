document.getElementById('licz').onclick = function(){
    console.log('zaczynam');
  var wygrana = document.getElementById('wygrana').value;
  var procent = document.getElementById('procent').value;
  var odsetki = ((wygrana * 0.9) *(procent/100))/12*0.81;
  
  var o = document.getElementById('odsetki');
    o.innerHTML = odsetki.toFixed(2) + ' PLN' ;
  };