const scrollTopBtn = document.querySelector('.scroll-top');
const burgerIcon = document.querySelector('header .burger-icon');
const navBar = document.querySelector('header nav');
const mainPage = document.querySelector('.mainPage');
const header = document.querySelector('#header');



scrollTopBtn.addEventListener('click', () => {
    let scrollCurr = window.scrollY;
    let interval = setInterval(() => {
        if (scrollCurr > 0) scrollCurr -= 20;
        if (scrollCurr <= 0) clearInterval(interval);
        window.scrollTo(0, scrollCurr);
    });
});

burgerIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (mainPage) {
        if (window.scrollY > (mainPage.offsetTop + mainPage.offsetHeight) - 30) {
            for (let i = 0; i < burgerIcon.children.length; i++) {
                burgerIcon.children[i].style.background = '#74C69D';
            }
        } else {
            for (let i = 0; i < burgerIcon.children.length; i++) {
                burgerIcon.children[i].style.background = '#fff';
            }
        }
    } else {
        if (window.scrollY > header.offsetHeight - 35) {
            for (let i = 0; i < burgerIcon.children.length; i++) {
                burgerIcon.children[i].style.background = '#74C69D';
            }
        } else {
            for (let i = 0; i < burgerIcon.children.length; i++) {
                burgerIcon.children[i].style.background = '#fff';
            }
        }
    }
});
















