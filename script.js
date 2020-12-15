const menu = document.querySelector(".menu-container");

document.addEventListener("click", event => {
    console.log(event.target.classList);
    if(event.target.classList.contains("menu-title") || event.target.parentNode.classList.contains("menu-title")
    ){
        menu.classList.toggle("hidden");
    } else if ( !event.target.classList.contains("menu-list") && 
        !event.target.parentNode.classList.contains("menu-list") &&
        !event.target.classList.contains("menu-container") &&
        !event.target.classList.contains("menu-link")) {

        menu.classList.add("hidden");
    }
});