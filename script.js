const areaEncriptado = document.querySelector(".areaEncriptado");
const mensajeDesencriptado = document.querySelector(".mensajeDesencriptado");

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/; 
    return regex.test(texto);
}

function encriptar(texto) {
    texto = texto.toLowerCase(); 
    if (!validarTexto(texto)) {
        alert("Escribe tu mensaje, recuerda que no debe contener acentos o caracteres especiales.");
        return "";
    }

    for (let i = 0; i < matrizCodigo.length; i++) {
        texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return texto;
}

function desencriptar(texto) {
    texto = texto.toLowerCase(); 
    if (!validarTexto(texto)) {
        alert("Escribe tu mensaje, recuerda que no debe contener acentos o caracteres especiales.");
        return "";
    }

    for (let i = 0; i < matrizCodigo.length; i++) {
        texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return texto;
}

function botonEncriptar() {
    const textoEncriptado = encriptar(areaEncriptado.value);
    if (textoEncriptado) {
        mensajeDesencriptado.value = textoEncriptado;
        areaEncriptado.value = "";
        mensajeDesencriptado.style.backgroundImage = "none";
    }
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(areaEncriptado.value);
    if (textoDesencriptado) {
        mensajeDesencriptado.value = textoDesencriptado;
        areaEncriptado.value = "";
        mensajeDesencriptado.style.backgroundImage = "none";
    }
}

document.querySelector(".copiar").addEventListener("click", function() {
    mensajeDesencriptado.select();
    document.execCommand("copy");
});
