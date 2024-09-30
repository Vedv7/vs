function toggleCard(card) {
    var content = card.querySelector('.card-content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
