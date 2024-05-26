const btn = document.querySelector(".btn")

const pencere = document.querySelector(".new_window")

const button = document.querySelector(".btn_1")

btn.addEventListener("click", function(){
    pencere.style.display="block"
})

button.addEventListener("click",function() {
    pencere.style.display="none"
})
