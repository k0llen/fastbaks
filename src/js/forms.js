if (document.querySelector('.forms')) {

    // forms steps

    const formsWrapper = document.querySelector('.forms');
    const contentTop = document.querySelector('.content__top');
    const form1btn = document.querySelector('.form_1-btn');
    const form2btn = document.querySelector('.form_2-btn');
    const form3btn = document.querySelector('.form_3-btn');
    const contentWrapper = document.querySelector('.content-tab');
    const chooseCard = document.querySelectorAll('.choose__card');
    const bullet1 = document.querySelector('.step-bullet-1');
    const bullet2 = document.querySelector('.step-bullet-2');
    const bullet3 = document.querySelector('.step-bullet-3');

    chooseCard.forEach((e) => {
        e.addEventListener('click', () => {
            contentWrapper.classList.add('forms--active');
            formsWrapper.classList.add('step-1');
            contentTop.classList.add('active');
        });
    });

    form1btn.addEventListener('click', (e) => {
        e.preventDefault();
        formsWrapper.classList.remove('step-1');
        formsWrapper.classList.add('step-2');
    });

    form2btn.addEventListener('click', (e) => {
        e.preventDefault();
        formsWrapper.classList.remove('step-2');
        formsWrapper.classList.add('step-3');
    });

    form3btn.addEventListener('click', (e) => {
        e.preventDefault();
        formsWrapper.classList.remove('step-3');
        formsWrapper.classList.add('form--sent');
    });

    bullet1.addEventListener('click', (e) => {
        formsWrapper.classList.add('step-1');
        formsWrapper.classList.remove('step-2');
        formsWrapper.classList.remove('step-3');
    });

    bullet2.addEventListener('click', (e) => {
        formsWrapper.classList.remove('step-1');
        formsWrapper.classList.add('step-2');
        formsWrapper.classList.remove('step-3');
    });

    bullet3.addEventListener('click', (e) => {
        formsWrapper.classList.remove('step-1');
        formsWrapper.classList.remove('step-2');
        formsWrapper.classList.add('step-3');
    });

    // form 2 calculation

    const formCard = document.querySelectorAll('.form_2-card');
    const counterInput = document.querySelector('.form_2-counter-top-input');
    const counterRange = document.querySelector('#form_2-counter-top-range');
    const counterMonthly = document.querySelector('.form_2-counter-monthly');
    var currentMonthCount = 1;
    var counterFormula = (counterInput.value / currentMonthCount) * 1.05;

    // adding active class to cards list

    formCard.forEach((card) => {

        card.addEventListener('click', (e) => {
            currentMonthCount = card.dataset.value;

            formCard.forEach((child) => {
                child.classList.remove('active');
            });

            card.classList.add('active');
            counterMonthly.innerHTML = '~ ' + (Math.round((counterInput.value * 1.05) / currentMonthCount)) + ' ₸*';
        });
    });

    //input value change

    // input slider

    noUiSlider.create(counterRange, {
        start: [20000],
        connect: 'lower',
        step: 1000,
        range: {
            'min': 10000,
            'max': 7000000
        }
    });

    counterRange.noUiSlider.on('update', function (values) {
        counterInput.value = Math.round(values);
        counterMonthly.innerHTML = '~ ' + ((Math.round(values) * 1.05) / currentMonthCount) + ' ₸*';
    });

    counterInput.addEventListener('change', (e) => {
        counterRange.noUiSlider.set(counterInput.value);
        counterMonthly.innerHTML = '~ ' + (Math.round((counterInput.value * 1.05) / currentMonthCount)) + ' ₸*';
    });

    // Dropdowns 

    document.querySelectorAll('.form-dropdown').forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector('.form-dropdown__button');
        const dropDownList = dropDownWrapper.querySelector('.form-dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.form-dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.form-dropdown__input-hidden');


        dropDownBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.classList.contains('form-dropdown__button--active')) {
                this.classList.remove('form-dropdown__button--active');
                dropDownList.classList.remove('form-dropdown__list--visible');
            } else {
                dropDownList.classList.toggle('form-dropdown__list--visible');
                this.classList.add('form-dropdown__button--active');
            }
        });

        dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                dropDownBtn.innerText = this.innerText;
                dropDownBtn.focus();
                dropDownInput.value = this.dataset.value;
                dropDownList.classList.remove('form-dropdown__list--visible');
                dropDownBtn.classList.remove('form-dropdown__button--active');
            });
        });

        document.addEventListener('click', function (e) {
            if (e.target !== dropDownBtn) {
                dropDownBtn.classList.remove('form-dropdown__button--active');
                dropDownList.classList.remove('form-dropdown__list--visible');
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
                dropDownBtn.classList.remove('form-dropdown__button--active');
                dropDownList.classList.remove('form-dropdown__list--visible');
                formWrapper.classList.remove('form__dropdown--active');
            }
        });
    });

    // masked input 

    jQuery(function ($) {
        $("#form-input-phone").mask("+7 (999) 999-9999");
    });

}