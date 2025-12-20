function celebrate() {
    // 1. Show the hidden message and images
    const surprise = document.getElementById('surprise-content');
    if (surprise) {
        surprise.style.display = 'block';
    }

    // 2. Remove floating animation from the card
    const card = document.getElementById('mainCard');
    if (card) {
        card.classList.remove('floating');
    }

    // 3. Hide the surprise button
    const btn = document.getElementById('surpriseBtn');
    if (btn) {
        btn.style.display = 'none';
    }

    // 4. Start the heart animation
    setInterval(createHeart, 300);

    // 5. Trigger the Confetti Cannon
    var duration = 4 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff477e', '#ff85a1', '#ffffff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff477e', '#ff85a1', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    const heartTypes = ['❤️', '💖', '💗', '💓', '✨'];
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    
    const duration = Math.random() * 3 + 4; 
    heart.style.animationDuration = duration + "s";
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}