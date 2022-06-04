// #Menu
function Menu(toggle) {
    const header = document.querySelector('header').children[0]
    toggle ? header.classList.add('active') : header.classList.remove('active')
}

// #Partner
function partner(info) {
    const infoS = document.querySelector('.info_for_partner')
    infoS.textContent = "“" + info.getAttribute('data-info') + "“"
}

// #InfoWorker
function modalInfoWorker(info) {

    const li_info = document.querySelector('#modal').querySelector('.infos').children[1].children[0]
    const description_info = document.querySelector('#modal').querySelector('.infoWorker').children[1].children[0]
    const img = document.querySelector('#modal').querySelector('.ava').children[0]

    this.img = info.parentNode.parentNode.children[0].getAttribute("src")
    this.name = info.parentNode.getAttribute('data-name')
    this.position = info.parentNode.getAttribute('data-position')
    this.phone = info.parentNode.getAttribute('data-phone')
    this.mail = info.parentNode.getAttribute('data-main')
    this.facebook = info.parentNode.getAttribute('data-linkFacebook')
    this.instagram = info.parentNode.getAttribute('data-linkInstagram')
    this.in = info.parentNode.getAttribute('data-linkIN')
    this.twitter = info.parentNode.getAttribute('data-linkTwitter')
    this.description = info.parentNode.getAttribute('data-description')


    li_info.children[0].children[1].textContent = this.name;
    li_info.children[1].children[1].textContent = this.position;
    li_info.children[2].children[1].textContent = this.phone;
    li_info.children[3].children[1].textContent = this.mail;
    li_info.children[4].children[0].setAttribute('href', this.facebook)
    li_info.children[4].children[1].setAttribute('href', this.in)
    li_info.children[4].children[2].setAttribute('href', this.instagram)
    li_info.children[4].children[3].setAttribute('href', this.twitter)
    description_info.textContent = this.description
    img.setAttribute('src', this.img)

    modalShow(true)
}


// #modalShow
function modalShow(toggle) {
    const modal = document.querySelector('#modal')
    toggle ? modal.classList.add('active') : modal.classList.remove('active')
}



// animate scroll menu a[href]...
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        document.body.style.overflow = 'scroll';
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        Menu(false)
    })
}

// #slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// animate block show
const animate = document.querySelectorAll('.animate__animated');

let config = {
    rootMargin: '0px',
    threshold: 0.01
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, config);

function intersectionHandler(entry) {
    const next = entry.target;
    if (next) {
        next.classList.add(next.getAttribute('data-animate'));
    }
}
animate.forEach(image => {
    observer.observe(image);
});