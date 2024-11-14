document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const sliderDots = document.querySelector('.slider-dots');
    let currentSlide = 0;
    let slideInterval;

    // 创建轮播图指示器
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showSlide(index));
        sliderDots.appendChild(dot);
    });

    function showSlide(n) {
        // 更新当前幻灯片
        slides.forEach(slide => slide.classList.remove('active'));
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function startSlideShow() {
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // 事件监听器
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        stopSlideShow();
        startSlideShow();
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        stopSlideShow();
        startSlideShow();
    });

    // 鼠标悬停时暂停轮播
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // 开始自动轮播
    startSlideShow();
}); 