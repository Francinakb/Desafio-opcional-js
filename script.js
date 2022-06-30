//traductor de colores de español a ingles


let palabraEsp
let test = ""   //indica que es un valor que no esta predeterminado pero que va a llevar una string
do {
    palabraEsp = prompt("Ingrese un color en español").toLowerCase()
} while (palabraEsp == test)

switch (palabraEsp) {
    case "rojo":
        alert("red")
        break
    case "azul":
        alert("blue")
        break
    case "verde":
        alert("green")
        break
    case "negro":
        alert("black")
        break
    case "blanco":
        alert("white")
        break
    case "rosa":
        alert("pink")
        break
    case "amarillo":
        alert("yellow")
        break
    case "gris":
        alert("grey")
        break
    case "naranja":
        alert("orange")
        break
        case "marron":
            alert("brown")
            break
    default:
        alert("Color aun no traducido")
        break
}


