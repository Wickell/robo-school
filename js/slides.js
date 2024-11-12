const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const slideWidth = 360; // Ширина каждого слайда
    const gap = 16; // Отступ между слайдами

    // Кнопка "Next" - прокрутка вправо
    nextButton.addEventListener('click', () => {
        slider.scrollBy({
            left: slideWidth + gap,
            behavior: 'smooth'
        });
    });

    // Кнопка "Prev" - прокрутка влево
    prevButton.addEventListener('click', () => {
        slider.scrollBy({
            left: -(slideWidth + gap),
            behavior: 'smooth'
        });
    });