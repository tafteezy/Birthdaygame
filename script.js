let currentIndex = 0;

function moveSlide(direction) {
    const track = document.getElementById('carouselTrack');
    const cards = track.querySelectorAll('.character-card');
    const totalCards = cards.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // loop to last
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; // loop to first
    }

    const cardWidth = cards[0].offsetWidth + 20; // card width + margin
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function selectCharacter(characterId) {
    alert("You selected Character " + characterId);
    window.location.href = "levels.html";
}
