// taggle icon navbar


// scroll Selections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
sections.forEach(sec => {
       let top = window.scrolly;
       let offset = sec.offsetTop - 100;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height) {
        //active navbar links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
       }
});

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);
}