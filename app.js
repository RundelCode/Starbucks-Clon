
const favorite25 = document.querySelector("#fv25");
const favorite100 = document.querySelector("#fv100");
const favorite200 = document.querySelector("#fv200");
const favorite300 = document.querySelector("#fv300");
const favorite400 = document.querySelector("#fv400");
const carrousel = document.querySelector(".carrouselinfosection");

const buttonfav = document.querySelector(".buttonSection");

favorite25.addEventListener('click', ()=>{
    carrousel.style.transform = "translateX(0vw)";
    carrousel.style.transition = "2s";
});
favorite100.addEventListener('click', ()=>{
    carrousel.style.transform = "translateX(-100vw)";
    carrousel.style.transition = "2s";
});
favorite200.addEventListener('click', ()=>{
    carrousel.style.transform = "translateX(-200vw)";
    carrousel.style.transition = "2s";
});
favorite300.addEventListener('click', ()=>{
    carrousel.style.transform = "translateX(-300vw)";
    carrousel.style.transition = "2s";
});
favorite400.addEventListener('click', ()=>{
    carrousel.style.transform = "translateX(-400vw)";
    carrousel.style.transition = "2s";
});
