function resetStyles(input) {
    // Réinitialiser les styles
    input.style.backgroundColor = "";
    input.style.color = "";
    input.style.textDecoration = "";
    
    // Retirez le span de la réponse correcte s'il existe
    let correctSpan = input.nextSibling;
    if (correctSpan && correctSpan.className === 'correct-answer') {
        correctSpan.remove();
    }
}





function barrerEtAfficherReponse(input, correctAnswer) {
    // Convertir les deux valeurs en minuscules pour ignorer la casse
    if (input.value.toLowerCase() !== correctAnswer.toLowerCase()) {
        input.style.textDecoration = "line-through red";
    }


    if (input.value !== correctAnswer) {
      applyIncorrectAnswerStyles(input, correctAnswer);
    } else {
      applyCorrectAnswerStyles(input);
    }
  }


// Ajoutez ce code dans un fichier commun ou dans les deux fichiers


document.addEventListener("DOMContentLoaded", function() {

    // Gestionnaire d'événement pour le bouton de validation
    document.getElementById('valider').addEventListener('click', function() {


    // Récupérer tous les éléments de réponse
    let trous = document.querySelectorAll('.trou');

    // Pour chaque trou, vérifier si la réponse est correcte
    trous.forEach(function(trou) {
        let correctAnswer = trou.getAttribute('data-correct-answer');
        barrerEtAfficherReponse(trou, correctAnswer);
});



});
});

document.addEventListener("DOMContentLoaded", function() {
    // ... code existant ...
  
    // Ajouter un gestionnaire pour la touche Entrée sur l'ensemble du document
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Empêcher l'action par défaut pour la touche Entrée
  

        // Valider toutes les réponses des éléments de texte à trou
        let trous = document.querySelectorAll('.trou');
        trous.forEach(function(trou) {
          let correctAnswer = trou.getAttribute('data-correct-answer');
          barrerEtAfficherReponse(trou, correctAnswer);
        });
      }
    });
  });