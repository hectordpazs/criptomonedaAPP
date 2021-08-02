//initializing the navbar: 

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
});

document.querySelector("#submit").addEventListener("click" , (e)=>{
    e.preventDefault()
})