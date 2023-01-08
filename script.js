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
const topnav = document.querySelector('.left-nav');


mobileMenu.addEventListener('click', ()=>{
    topnav.classList.toggle('show-nav');
})
