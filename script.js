const message = [
    "Mi mujer hermosa💕",
    "La mujer de mi vida🌹",
    "Mi persona favorita😍",
    "Reina de mi corazón💖",
    "A tu lado por siempre😻",
    "Lo mejor de mi vida💏",
    "Mi chica ideal🥰",
    "Tus ojos deslumbrantes🤩",
    "Luz de mi vida💝",
    "La más hermosa entre todas",
    "La única mujer que amaré",
    "Mujer de mi vida"
];


function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = message[Math.floor(Math.random() * message.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    document.getElementById("bubbles-text").appendChild(bubble);

    setTimeout(() => bubble.remove(), 8000);
}


const emojis = ['💖', '🌹', '💕', '💘', '✨', '🥰'];
const APPEARANCE_SPEED = 3000;

function createFloatingEmoji() {
    const emoji = document.createElement("div");
    emoji.className = "floating-emoji";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.setProperty("--random-x", (Math.random() * 2 - 1));
    emoji.style.fontSize = (Math.random() * 20 + 20) + "px";
    emoji.style.animationDuration = (Math.random() * 15 + 10) + "s";
    
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 15000);
}


setInterval(createTextBubble, 800);
setInterval(createFloatingEmoji, APPEARANCE_SPEED);


window.onload = () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingEmoji, i * 500);
    }
};