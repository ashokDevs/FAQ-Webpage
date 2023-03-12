const togglebtn=document.querySelector("#navToggle");
const ul=document.querySelector('ul');
togglebtn.addEventListener("click", ()=> {
    ul.classList.toggle("visible");
})