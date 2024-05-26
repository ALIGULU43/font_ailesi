let persons = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },

    {
        name: "Madeline",
        age: 80,
        gender: "female"
    },

    {
        name: "Chery",
        age: 22,
        gender: "female"
    },

    {
        name: "Sam",
        age: 30,
        gender: "male"
    },

    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }

]

let TALISH = function(obyekt){

    if(obyekt.age>18){

        return`${obyekt.name} film izlemeye gede bilersiz.`

    }
    
    else{

        return`${obyekt.name} agali senniy doyull.`
    }
}
  persons.forEach(obyekt=>{

    console.log(TALISH(obyekt));

})
