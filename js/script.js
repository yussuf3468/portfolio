document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav a').forEach(item => item.classList.remove('active'));
        
        this.classList.add('active');
    });
});
// typing animation
var typed = new Typed(".typing",{
    strings:["Web Designer", "Web Developer", "Software Engineer", "Data Analyst"],
    typeSpeed:100,
    BackSpeed:60
})