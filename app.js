// Selección de los elementos utilizando getElementById
const areaTextoEntrada = document.getElementById('textoEntrada');
const areaTextoResultado = document.getElementById('textoResultado');

// Mapeo de caracteres para encriptar y desencriptar
const mapaCifrado = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

const mapaDescifrado = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};

// Función para cifrar el texto
const cifrarTexto = (texto) => {
    return texto.replace(/[aeiou]/g, (coincidencia) => mapaCifrado[coincidencia]);
};

// Función para descifrar el texto
const descifrarTexto = (texto) => {
    return texto.replace(/ai|enter|imes|ober|ufat/g, (coincidencia) => mapaDescifrado[coincidencia]);
};

// Validación de entrada para solo permitir minúsculas y espacios
areaTextoEntrada.addEventListener('input', (evento) => {
    const caracteresInvalidos = /[^a-z\s]/g; 
    if (caracteresInvalidos.test(evento.target.value)) {
        alert("Solo se permiten minúsculas y espacios.");
        evento.target.value = evento.target.value.replace(caracteresInvalidos, '');
    }
});

// Función para copiar el contenido
const copiarTexto = () => {
    navigator.clipboard.writeText(areaTextoResultado.value)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(error => console.error('Error al copiar el texto: ', error));
};

// Función para pegar el contenido desde el portapapeles
const pegarTexto = () => {
    navigator.clipboard.readText()
        .then(texto => areaTextoEntrada.value = texto)
        .catch(error => console.error('Error al pegar el texto: ', error));
};

// Función para borrar el contenido de un área de texto
const borrarTexto = (elemento) => {
    elemento.value = "";
};

// Asignación de eventos a los botones
document.getElementById('botonPegar').addEventListener('click', pegarTexto);
document.getElementById('botonBorrar').addEventListener('click', () => borrarTexto(areaTextoEntrada));
document.getElementById('botonEncriptar').addEventListener('click', () => {
    const textoCifrado = cifrarTexto(areaTextoEntrada.value);
    areaTextoResultado.value = textoCifrado;
});
document.getElementById('botonDesencriptar').addEventListener('click', () => {
    const textoDescifrado = descifrarTexto(areaTextoEntrada.value);
    areaTextoResultado.value = textoDescifrado;
});
document.getElementById('botonCopiar').addEventListener('click', copiarTexto);
