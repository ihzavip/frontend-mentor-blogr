
let toggleMenu = document.getElementById("menu__toggle");
let closeToggle = document.getElementById(`close`);
let navigationMenu = document.querySelector("#navigation");

toggleMenu.classList.add("display"); 

toggleMenu.addEventListener("click",function(){
    toggleMenu.classList.toggle("display"); 
    navigationMenu.classList.toggle("display-flex"); 
    closeToggle.classList.toggle("display");
})
closeToggle.addEventListener("click",function(){
    toggleMenu.classList.toggle("display"); 
    navigationMenu.classList.toggle("display-flex"); 
    closeToggle.classList.toggle("display");
})

