// const aboutBtn = document.getElementById("about");
// const aboutDiv = document.getElementsByClassName("aboutDiv");
// const homeDiv = document.getElementsByClassName("homeDiv");

// aboutBtn.onclick = function(){
//     if (aboutDiv.style.display !== "none")
//     {
//         aboutDiv.style.display = "none";
//     }
//     else{
//         aboutDiv.style.display = "block";
//         homeDiv.style.display = "none";
//     }
// }

const mobileMenu = document.querySelector('.menu-icon');
const indexnav = document.querySelector('.left-nav-index');
const restnav = document.querySelector('.left-nav');


mobileMenu.addEventListener('click', ()=>{
    restnav.classList.toggle('show-nav');
})
