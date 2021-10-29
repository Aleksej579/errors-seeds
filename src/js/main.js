let btnGreen = document.querySelector('.btn_menu_green')
let dropmenu = document.querySelector('.dropmenu')
let btn_aboutStore = document.querySelector('.about_store')
let btn_work = document.querySelector('.work')
let dropmenu_as = document.querySelector('.a_s')
let dropmenu_w = document.querySelector('.w')

btnGreen.onclick = function () {
    dropmenu_w.classList.remove("activeSub");
    dropmenu_as.classList.remove("activeSub");
    btnGreen.classList.toggle("active");
    dropmenu.classList.toggle("active");
}
btn_aboutStore.onclick = function () {
    btnGreen.classList.remove("active");
    dropmenu.classList.remove("active");
    dropmenu_w.classList.remove("activeSub");
    dropmenu_as.classList.toggle("activeSub");
    btn_aboutStore.classList.toggle("top");
}
btn_work.onclick = function () {
    btnGreen.classList.remove("active");
    dropmenu.classList.remove("active");
    dropmenu_as.classList.remove("activeSub");
    dropmenu_w.classList.toggle("activeSub");
    btn_work.classList.toggle("top");
}
