document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startExperience');
    startBtn.addEventListener('click', () => {
        window.location.href = 'page2.html'; // Certifique-se de que o arquivo page2.html esteja na mesma pasta.
    });
});
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('page2.html')) {
        setInterval(createHeart, 500); // Cria um coração a cada 500ms

        const letter = document.getElementById('letter');
        const messages = document.getElementById('messages');
        const selectedMessageDiv = document.getElementById('selectedMessage');
        const backToMessagesBtn = document.getElementById('backToMessages');
        const mainTitle = document.getElementById('mainTitle');

        letter.addEventListener('click', () => {
            mainTitle.classList.add('hidden');
            letter.classList.add('hidden');
            messages.classList.remove('hidden');
        });

        const messageBtns = document.querySelectorAll('.message-btn');
        messageBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedMessage = selectedMessageDiv.querySelector('p');
                selectedMessage.textContent = e.target.getAttribute('data-message');
                messages.classList.add('hidden');
                selectedMessageDiv.classList.remove('hidden');
            });
        });

        backToMessagesBtn.addEventListener('click', () => {
            selectedMessageDiv.classList.add('hidden');
            messages.classList.remove('hidden');
        });
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração aleatória entre 3 e 5 segundos
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.opacity = '1';
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove o coração após 5 segundos
}
