const wishes = {
    "nguyễn thị vịnh": "Nhân ngày 20/10, con chúc mẹ luôn mạnh khỏe và hạnh phúc trọn vẹn. Cảm ơn mẹ đã sinh ra và nuôi con khôn lớn thành tài. Con yêu mẹ!!",
    "nguyễn thị hương": "Nhân dịp 20/10, chúc chị gái yêu dấu của em luôn mạnh khỏe, giữ nụ cười trên môi và sớm tìm được chân ái nhé. Yêu chị rất nhiều.!",
    "monkey": "Happy 20/10 Wishes for a Dear Friend Hey bestie! On this Vietnamese Women's Day, October 20th, I wish you to always be as beautiful and vibrant as the brightest flowers, and strong enough to chase all your dreams. Hope you have a super fun day and get tons of gifts! Most importantly, keep living your life to the fullest and be happy, because you truly deserve all the wonderful things in this world. "
};

const defaultWish = "💐 Happy Vietnamese Women's Day - October 20th! On the occasion of Vietnamese Women's Day,  October 20th, we send our warmest and most sincere wishes to all the wonderful women.  We wish all grandmothers, mothers, and sisters to always be full of health, overflowing with joy, and have a complete and happy life. You are the vibrant flowers, the endless source of strength and inspiration that makes this world more meaningful and beautiful. Always be confident, resilient, and shine in your own way! Wishing you a truly warm and memorable October 20th!";

function showWish() {
    const nameInput = document.getElementById('nameInput');
    const wishText = document.getElementById('wish-text');
    let userName = nameInput.value.trim().toLowerCase();
    let wish = wishes[userName] || defaultWish;

    // Typewriter effect
    wishText.innerText = '';
    let i = 0;
    function typeWriter() {
        if (i < wish.length) {
            wishText.innerText += wish.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}

document.getElementById('nameInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        showWish();
    }
});