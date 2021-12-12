function affichage() { 
    if(parseInt(document.getElementById("niveau").value) > 0 && parseInt(document.getElementById("niveau").value) <7){
       document.getElementById("affichage").innerHTML = "<h" + document.getElementById("niveau").value + "> Bonjour " + document.getElementById("nom").value + " niveau=" +
        document.getElementById("niveau").value; 

       document.getElementById("affichage").style.cssText = 'color:green;' 
    } else{
        document.getElementById("affichage").innerHTML = "<p> Erreur le niveau doit être entre 1 et 6";
        document.getElementById("affichage").style.cssText = 'color:red;'
    }
    


}