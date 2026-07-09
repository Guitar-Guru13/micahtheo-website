const releaseDate = new Date(2027, 5, 18, 0, 0, 0).getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = releaseDate - now;
console.log(distance);

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;

},1000);
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(section=>{
    observer.observe(section);
});