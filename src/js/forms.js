if (document.querySelector('.forms')) {

    // forms steps

    const formsWrapper = document.querySelector('.forms');
    const form1btn = document.querySelector('.form_1-btn');
    const form2btn = document.querySelector('.form_2-btn');
    const form3btn = document.querySelector('.form_3-btn');
    const contentWrapper = document.querySelector('.content-tab');
    const chooseCard = document.querySelectorAll('.choose__card');

    chooseCard.forEach((e) => {
        e.addEventListener('click', () => {
            contentWrapper.classList.add('forms--active');
            formsWrapper.classList.add('step-1');
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

    // form 2 calculation

    const formCard = document.querySelectorAll('.form_2-card');
    const counterInput = document.querySelector('.form_2-counter-top-input');
    const counterRange = document.querySelector('.form_2-counter-top-range');
    const counterMonthly = document.querySelector('.form_2-counter-monthly');
    let currentMonthCount = 1;

    // adding active class to cards list

    formCard.forEach((card) => {

        card.addEventListener('click', (e) => {
            currentMonthCount = card.dataset.value;
            let counterFormula = (counterRange.value / currentMonthCount) * 1.05;

            formCard.forEach((child) => {
                child.classList.remove('active');
            });
            card.classList.add('active');
            counterMonthly.innerHTML = '~ ' + Math.round(counterFormula) + ' ₸*';
        });
    });

    //input value change

    counterRange.addEventListener('change', (e) => {
        let counterFormula = (counterRange.value / currentMonthCount) * 1.05;

        counterInput.value = counterRange.value;
        counterMonthly.innerHTML = '~ ' + Math.round(counterFormula) + ' ₸*';
    });

    counterInput.addEventListener('change', (e) => {
        counterRange.value = counterInput.value;
        let counterFormula = (counterRange.value / currentMonthCount) * 1.05;
        counterMonthly.innerHTML = '~ ' + Math.round(counterFormula) + ' ₸*';
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

        // Yes\no buttons

        const form3SelfBtns = document.querySelectorAll('.form_3-self-btn');

        form3SelfBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                form3SelfBtns.forEach((child) => {
                    child.classList.remove('active');
                })

                btn.classList.add('active');
            });
        });


    });


}