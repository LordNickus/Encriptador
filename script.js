generarTexto()

function generarTexto() {
    var botonCopiar = document.querySelector('#botonCopiar');
    var outputTexto = document.getElementById('conTexto');
    var sinTexto = document.getElementById('sinTexto');
    var inputText = document.getElementById('inputText').value
    if(inputText == '') {
        outputTexto.style.display = 'none';
        sinTexto.style.display = 'block';
        botonCopiar.style.display = 'none';
        botonCopiar.disabled = true;
    } else {
        outputTexto.style.display = 'block';
        sinTexto.style.display = 'none';
        botonCopiar.style.display = 'block';
        botonCopiar.disabled = false;
    }
}

    function encriptar(){
        let texto = document.querySelector(".inputText").value;
        let textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".encripText").value = textoEncriptado;
        document.querySelector(".inputText").value;
    }

    function desencriptar(){
        var texto = document.querySelector(".inputText").value; 
        var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        document.querySelector(".encripText").value = textoEncriptado; 
        document.querySelector(".inputText").value;

    }

    function copiarTexto() {
        var aCopiar = document.getElementById('conTexto').value
        navigator.clipboard.writeText(aCopiar)
        .then(() => {
            alert("Texto copiado con éxito")
        })
        .catch(() => {
            alert("Algo salió mal")
        })
    }

    var boton1 = document.querySelector(".botonEncriptar"); 
    var boton2 = document.querySelector(".botonDesencriptar"); 
