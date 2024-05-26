let esas = document.querySelector("#qutu")
let borderBtn1 = document.querySelector("#borderxart")
let borderBtn2 = document.querySelector("#borderxazal")
let heightBtn1 = document.querySelector("#hundurlukxart")
let heightBtn2 = document.querySelector("#hundurlukxazal")
let widthBtn1 = document.querySelector("#uzunluqxart")
let widthBtn2 = document.querySelector("#uzunluqxazal")
let textColor = document.querySelector("#reng")
let backColor = document.querySelector("#arxaxreng")

let font = 18

let border = 18
borderBtn1.addEventListener("click", () => { 
    border += 5
    esas.style.borderRadius = border + "px"

})
borderBtn2.addEventListener("click", () => {
    border -= 5
    esas.style.borderRadius = border + "px"

})

let height = 60

heightBtn1.addEventListener ( "click" ,  () => {
    console.log("Migg");
    height += 5
    esas.style.height = height + "px"

})
heightBtn2.addEventListener("click", () => {
    height -= 5
    esas.style.height = height + "px"

})


let width = 160
widthBtn1.addEventListener("click", () => {
    width += 5
    esas.style.width = width + "px"

})
widthBtn2.addEventListener("click", () => {
    width -= 5
    esas.style.width = width + "px"

})


textColor.addEventListener("change", () => {
    esas.style.color = textColor.value
})


backColor.addEventListener("change", () => {
    esas.style.backgroundColor = backColor.value
})