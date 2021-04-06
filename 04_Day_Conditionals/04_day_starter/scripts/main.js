// this is your main.js script

let edad = prompt("ingrese su edad:")
if (edad>=18) {
    alert("Tienes la edad suficiente para manejar")
} else {
    alert(`a ud le faltan ${18-edad} años para conducir`)
}

let myAge = 27
if (myAge > edad) {
    alert(`Yo soy ${myAge - edad} mayor que tú`)
} else {
    alert(`Tú eres ${edad - myAge} mayor que yo`)
}

let a = 4
let b = 3
if (a>b) {
    alert(`${a} es mayor que ${b}`)
} else {
    alert(`${b} es mayor que ${a}`)
}

a>b?console.log(`${a} es mayor que ${b}`):console.log(`${b} es mayor que ${a}`)