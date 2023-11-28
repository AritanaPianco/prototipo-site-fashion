const btnMobile = document.querySelector(".btn-Mobile")
const menuMobile = document.querySelector(".menu-Mobile")


btnMobile.addEventListener("click", () => {
    if(menuMobile.classList.contains("hidden")){
        menuMobile.classList.remove("hidden")        
    }else{
        menuMobile.classList.add("hidden")
    }
})
