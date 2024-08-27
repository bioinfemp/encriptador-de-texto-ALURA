const textarea = document.getElementById('texto-original');
const mensajeError = document.getElementById('mensaje-error');

function esTextoValido(texto) {
    for (let char of texto) {
        let codigo = char.charCodeAt(0);
        if (!(codigo >= 97 && codigo <= 122) && char !== ' ') {
            return false; // No es una letra minúscula ni espacio
        }
    }
    return true;
}
function encriptarTexto() {
    let texto = textarea.value;

    if (!esTextoValido(texto)) {
        mensajeError.style.display = 'block';
        return; // Detiene la función si el texto no es válido
    }

    mensajeError.style.display = 'none';

    texto = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    textarea.value = texto;
}

function desencriptarTexto() {
    let texto = textarea.value;

    if (!esTextoValido(texto)) {
        mensajeError.style.display = 'block';
        return; // Detiene la función si el texto no es válido
    }

    mensajeError.style.display = 'none';

    texto = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    textarea.value = texto;
}

function copiarTexto() {
    const texto = textarea.value;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto)
        alert('Texto copiado con éxito');
    }
    else {
        alert('Error al copiar el texto');
    }
}
