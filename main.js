const hamburguesa = document.querySelector(".header-hamburguesa");
const close = document.querySelector(".header-close");
const modal = document.querySelector(".header-modal");

hamburguesa.addEventListener("click", ()=>{
    modal.classList.add("active");
});

close.addEventListener("click", ()=>{
    modal.classList.remove("active");
})