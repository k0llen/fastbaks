if (document.querySelector('.content__top-dropdown')) {
    const dropDownBtn = document.querySelector('.content__top-dropdown__button');
    const dropDownList = document.querySelector('.content__top-dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.content__top-dropdown__list-item');
    const dropDownInput = document.querySelector('.content__top-dropdown__input-hidden');


    dropDownBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.classList.contains('content__top-dropdown__button--active')) {
            this.classList.remove('content__top-dropdown__button--active');
            dropDownList.classList.remove('content__top-dropdown__list--visible');
        } else {
            dropDownList.classList.toggle('content__top-dropdown__list--visible');
            this.classList.add('content__top-dropdown__button--active');
        }
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('content__top-dropdown__list--visible');
            dropDownBtn.classList.remove('content__top-dropdown__button--active');
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('content__top-dropdown__button--active');
            dropDownList.classList.remove('content__top-dropdown__list--visible');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('content__top-dropdown__button--active');
            dropDownList.classList.remove('content__top-dropdown__list--visible');
            formWrapper.classList.remove('content__top--active');
        }
    });
};