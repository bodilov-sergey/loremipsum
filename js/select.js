const select = () => {
    const selectHeads = document.querySelectorAll(".select__head");

    selectHeads.forEach(function (selectHead) {
        selectHead.addEventListener("click", function () {
            const isOpen = this.classList.contains("select__head--open");
            closeAllSelects();
            if (!isOpen) {
                this.classList.add("select__head--open");
                this.nextElementSibling.style.display = "block";
            }
        });
    });

    const selectItems = document.querySelectorAll(".select__item");

    selectItems.forEach(function (selectItem) {
        selectItem.addEventListener("click", function () {
            const selectHead = this.parentNode.previousElementSibling;
            const allItems = this.parentNode.querySelectorAll(".select__item");
            allItems.forEach((item) => item.classList.remove("select__item--selected"));
            this.classList.add("select__item--selected");
            selectHead.classList.remove("select__head--open");
            this.parentNode.style.display = "none";
            selectHead.textContent = this.textContent;
            selectHead.previousElementSibling.value = this.getAttribute("data-value");
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".select")) {
            closeAllSelects();
        }
    });

    function closeAllSelects() {
        const selectHeads = document.querySelectorAll(".select__head");
        const selectLists = document.querySelectorAll(".select__list");

        selectHeads.forEach(function (selectHead) {
            selectHead.classList.remove("select__head--open");
        });

        selectLists.forEach(function (selectList) {
            selectList.style.display = "none";
        });
    }
};

export default select;
