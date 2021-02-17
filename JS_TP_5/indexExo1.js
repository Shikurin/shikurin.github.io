// créer les constantes nécessaires
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const EdTInput = document.querySelector('#enterEdT');
const submitBtn = document.querySelector('#submitEdT');
const forgetBtn = document.querySelector('#forgetEdT');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');


// Empêcher le form d'être soumis
form.addEventListener('submit', function(e) {
  e.preventDefault();
});


// exécuter la fonction quand le bouton 'Submit' est cliqué
submitBtn.addEventListener('click', function() {
  // stocker le nom entré dans le web storage
  localStorage.setItem('EdT', EdTInput.value);
  // exécuter EdTDisplayCheck() pour afficher la
  // page personnalisée et changer le formulaire
  EdTDisplayCheck();
});


// exécuter la fonction quand le bouton 'Forget' est cliqué
forgetBtn.addEventListener('click', function() {
  // supprimer l'item name du web storage
  localStorage.removeItem('EdT');
  // exécuter EdTDisplayCheck() pour afficher la
  // page personnalisée et changer le formulaire
  EdTDisplayCheck();
});


// définit la fonction EdTDisplayCheck()
function EdTDisplayCheck() {
  // vérifie si l'élément 'EdT' est stocké dans le web storage
  if(localStorage.getItem('EdT')) {
    // rappelle l'url de l'emploi du temps
    let edt = localStorage.getItem('EdT');
    h1.textContent = 'Voici votre emploi du temps : ' + edt;
    // cache la partie 'remember' du formulaire et affiche la partie 'forget'
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    // Sinon, affiche un accueil générique
    h1.textContent = 'Voici votre emploi du temps ';
    // cache la partie 'forget' du formulaire et affiche la partie 'remember'
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}


document.body.onload = EdTDisplayCheck;
