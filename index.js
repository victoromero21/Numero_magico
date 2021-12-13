const intentosTotales = document.getElementById("intentos").value

const generarNumeroAleatorio = () => {
    const numeroAleatorio = parseInt(Math.random() * (999) + 1)
    document.getElementById("aleatorio").value = numeroAleatorio.toString()
    document.getElementById("btnAleatorio").setAttribute("disabled", "true")
    document.getElementById("juego").classList.remove("nomostrar")
    // Numero aleatorio en la consola
    console.log(numeroAleatorio)
}
const juego = () => {
    const numeroAleatorio = document.getElementById("aleatorio").value
    let numero = document.getElementById("numero").value
    let gano = false
    let intentos = document.getElementById("intentos").value
    let aux = false
    if (numero > 0 && numero <= 1000) {
        if (numero === numeroAleatorio) {
            alert("Ganaste")
            gano = true
            document.getElementById("respuesta").classList.remove("nomostrar")
        } else {
            if (numero < numeroAleatorio) {
                alert("El numero es mayor")
            } else {
                alert("El numero es menor")
            }
        }
    } else {
        alert("El numero ingresado debe estar entre 0 y 1000")
        aux = true
    }
    if (!gano) {
        if (!aux) {
            intentos -= 1
        }
        document.getElementById("intentos").value = intentos
        console.log(intentos)
    }
    if (intentos == 0) {
        alert("Perdiste")
        document.getElementById("respuesta").classList.remove("nomostrar")
    }
    console.log(intentos)

}
const reiniciarJuego = () => {
    document.getElementById("juego").classList.add("nomostrar")
    document.getElementById("intentos").value = intentosTotales
    document.getElementById("respuesta").classList.add("nomostrar")
    document.getElementById("aleatorio").value = ""
    document.getElementById("btnAleatorio").removeAttribute("disabled")
    document.getElementById("numero").value = ""
}