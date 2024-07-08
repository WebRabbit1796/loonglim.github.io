new WOW().init();

(function(){
    emailjs.init("4hcD8SrCkhmvJSPdB"); // Replace 'YOUR_USER_ID' with your EmailJS user ID
 })();

var frm = document.querySelector('#contact')
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show loading indicator with fade-in effect
    var loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.classList.remove('hidden');
    loadingMessage.classList.add('show');
            
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_so11m4s', 'template_8ce4w29', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('confirmationMessage').classList.remove('hidden');
            alert('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('An error occurred. Please try again later.');
        })
        .finally(function() {
            // Hide loading indicator with fade-out effect
            loadingMessage.classList.remove('show');
            loadingMessage.classList.add('hidden');
            document.getElementById('name').value='';
            document.getElementById('email').value='';
            document.getElementById('message').value='';
        });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true
});
// 

const work = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});
setInterval(() => work.next(), 3000);

const skills = new Siema({
    perPage: {
        768: 1,
        992: 3,
    },
    selector: '.skill',
    duration: 200,
    easing: 'ease-out',
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});
setInterval(() => skills.next(), 1500);

const navbarNav = document.querySelector('.navbar-nav');
const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar')

toggle.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

navbarNav.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.height = "64px";
        navbar.style.lineHeight = "64px";
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
        navbarNav.classList.add('navBar');
        toggle.style.filter ="invert(1)"
    } else if (window.pageYOffset == 0) {
        navbar.style.height = "77px";
        navbar.style.lineHeight = "77px";
        navbar.style.backgroundColor = "black";
        navbar.style.color = "white";
        navbarNav.classList.remove('navBar');
        toggle.style.filter ="invert(0)"
    }
});