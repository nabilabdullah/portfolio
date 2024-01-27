// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; // = 0
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');

        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');

        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Humberger Menu
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden'); 
});

// Close humberger menu in window click
window.addEventListener('click', function(e) {
    if(e.target != humberger && e.target != navMenu){
        humberger.classList.remove('humberger-active');
        navMenu.classList.add('hidden'); 
    }
});

// Dark toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

const blobLight = document.querySelector('#blob-light');
const blobDark = document.querySelector('#blob-dark');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');

        blobLight.classList.add('hidden');
        blobDark.classList.remove('hidden');

        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');

        blobLight.classList.remove('hidden');
        blobDark.classList.add('hidden');

        localStorage.theme = 'light';
    }
});

if(localStorage.getItem('theme') == 'dark'){
    blobLight.classList.add('hidden');
    blobDark.classList.remove('hidden');

    darkToggle.checked = true;
}else{
    blobLight.classList.remove('hidden');
    blobDark.classList.add('hidden');

    darkToggle.checked = false;
}