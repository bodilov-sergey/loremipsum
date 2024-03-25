const rangeValue = () => {
    const rangeInput = document.querySelector(".range");
    const rangeValue = document.querySelector(".order-form__range-value");

    rangeInput.addEventListener("input", function () {
        const newValue = this.value;
        rangeValue.textContent = newValue + " %";
    });
};

export default rangeValue;
