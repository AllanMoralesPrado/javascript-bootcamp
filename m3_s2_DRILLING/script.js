function convert(temperature, fahrenheit_on){
  let values = document.querySelectorAll('[value]');
  let unit = document.getElementById('bigC');
  if(fahrenheit_on){
    for(let iter of values){
      iter.innerHTML = (parseFloat(iter.getAttribute('value'))*1.8 + 32).toFixed(0);
    }
    unit.innerHTML = '°F';
  }
  else{
    for(let iter of values){
      // iter.innerHTML = ((parseFloat(iter.getAttribute('value')) - 32.0) * (5/9.0)).toFixed(0);
      iter.innerHTML = iter.getAttribute('value');
    }
    unit.innerHTML = '°C';
  }
}