
function pouceVersCM() { 
  document.getElementById("resultat").innerHTML = "pouces ==> " + parseInt(document.getElementById("valeur").value) * 2.5 + " cm";
}

function CMVersPouces() {
  document.getElementById("resultat").innerHTML = "cm ==> " + parseInt(document.getElementById("valeur").value) / 2.5 + " pouces";
}

function CVersF() {
  document.getElementById("resultat").innerHTML = "celcius ==> " + (parseInt(document.getElementById("valeur").value) * 9/5 + 32).toFixed(1) + " farenheit";
}

function FVersC() {
  document.getElementById("resultat").innerHTML = "farenheit ==> " + ((parseInt(document.getElementById("valeur").value)-32) * 5/9).toFixed(1) + " celcius";
}
