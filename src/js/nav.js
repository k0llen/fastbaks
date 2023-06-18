if (document.querySelector('.nav')) {

    //burger desctop
    if (window.innerWidth <= 1380) {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav');
        const body = document.querySelector('.body');

        burger.addEventListener('click', () => {
            nav.classList.toggle('burger--active');
            body.classList.toggle('lock');
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                nav.classList.remove('burger--active');
                body.classList.remove('lock');
            }
        });
    }
}