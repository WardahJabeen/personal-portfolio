// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

    // Find the currently active link and remove the active class
    document.querySelector('.nav__link.active-link').classList.remove('active-link');

    // Add the active class to the clicked link
    this.classList.add('active-link');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll sections active link
const sections = document.querySelectorAll('select[id')

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// change background header
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


// show scroll top
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop)


// mixit up filter portoflio
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

// link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(L => L.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}

linkPortfolio.forEach(L => L.addEventListener('click', activePortfolio))

// swiper carousel


// gsap animation
gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 }).then(() => { document.querySelector('.home__img').style.opacity = 1; });
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 }).then(() => { document.querySelector('.home__data').style.opacity = 1; });
gsap.from('.home__greeting, .home__name, .home__profession', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 }).then(() => { document.querySelector('.home__greeting, .home__name, .home__profession').style.opacity = 1; });

gsap.from('.nav__logo .nav__toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 }).then(() => { document.querySelector('.nav__logo .nav__toggle').style.opacity = 1; });
gsap.from('.nav__item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 }).then(() => { document.querySelector('.nav__item').style.opacity = 1; });
// gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 }).then(() => { document.querySelector('.home__social-icon').style.opacity = 1; });

gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2.3, ease: 'expo.out', stagger: .2 }).then(() => { document.querySelector('.home__social-icon').style.opacity = 1; });


// shooting stars
for (let i = 0; i < 50; i++) { // Increase or decrease for more/less sparkles
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);

    // Randomize each sparkle's position
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;

    // Randomize the size
    const size = Math.random() * 5 + 2; // Change 5 for larger sizes, 2 for minimum size
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    // Randomize the animation duration
    sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`; // Between 1 and 3 seconds

    // Randomize the animation delay
    sparkle.style.animationDelay = `${Math.random() * 2}s`; // Up to 2 seconds delay
}

// //carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

    })
})

// flip the card
document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', () => {
        // Find the closest ancestor which is a card
        const card = button.closest('.card');
        card.classList.toggle('flipped');
    });
});

