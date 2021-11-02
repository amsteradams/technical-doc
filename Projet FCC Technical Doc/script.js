
//recuperer les titres pour changer de couleur
let headers = document.querySelectorAll('header');

//recuperer le fond pour changer le background(on changera la couleur de police generale sur le body aussi)
let body = document.body;

//recuperer le boutton pour creer l'evenement
let boutton = document.getElementById("boutton");

//recuperer la nav
let navig = document.getElementById("navbar");

boutton.addEventListener('click', clearMode);
    function clearMode(){
      for (let index = 0; index < headers.length; index++) {
          headers[index].classList.toggle("orange");          
      }
      body.classList.toggle('dark-grey');
      body.classList.toggle('white-text');
      boutton.classList.toggle('boutton-dark');
    }