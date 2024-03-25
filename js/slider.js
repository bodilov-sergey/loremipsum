const slider = () => {
    const slider = document.querySelector(".slider");
    const container = slider.querySelector(".slider__wrapper");
    const wrapper = slider.querySelector(".slider__slides");
    const slides = slider.querySelectorAll(".slider__slide");
    const prevBtn = slider.querySelector(".slider__control--prev");
    const nextBtn = slider.querySelector(".slider__control--next");

    let currentIndex = 0;
    let slideWidth = container.offsetWidth;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    function goToPrevSlide() {
        goToSlide(currentIndex - 1);
    }

    function goToNextSlide() {
        goToSlide(currentIndex + 1);
    }

    function updateSlideWidth() {
        slideWidth = container.offsetWidth;
        goToSlide(currentIndex);
    }

    window.addEventListener("resize", updateSlideWidth);

    prevBtn.addEventListener("click", goToPrevSlide);
    nextBtn.addEventListener("click", goToNextSlide);
};

export default slider;
