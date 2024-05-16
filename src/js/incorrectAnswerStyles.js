// incorrectAnswerStyles.js


function applyIncorrectAnswerStyles(input, correctAnswer) {
    resetStyles(input);

    input.style.textDecoration = "line-through red";
    
    // Vérifiez si le span de la réponse correcte existe déjà
    // Utilisez une variable séparée pour le prochain élément frère afin d'éviter le TypeError
    let nextElement = input.nextSibling;
    let correctSpan = nextElement && nextElement.className === 'correct-answer' ? nextElement : null;

    // S'il n'y a pas de span correct ou si le frère suivant n'est pas un span correct
    if (!correctSpan) {
        correctSpan = document.createElement("span");
        correctSpan.className = 'correct-answer';
        correctSpan.textContent = ` (${correctAnswer})`;
        correctSpan.style.color = "orange";
        input.parentNode.insertBefore(correctSpan, input.nextSibling);
    }
}