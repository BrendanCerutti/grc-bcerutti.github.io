//making an empty function
function navSlide() {
    //this grabs the class burger from the html and stores it as a const
    const burger = document.querySelector('.burger');
    //grabs the links and stores them
    const nav = document.querySelector('.nav-links');
    //grabs all list items in the nav links class
    const navLinks = document.querySelectorAll('.nav-links li');
    //this is an event lister that watch until the const burger is click, then toggle the nav-active class
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //this basically says for each link, delay the fade is a curtain time, so it is clean
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });
}
//calling the function
navSlide();