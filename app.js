function encriptar(){
 let texto = document.getElementById("texto").value;
 let tituloMensaje = document.getElementById ("titulo__mensaje");
 let parrafo = document.getElementById ("parrafo");
 let ilustracion = document.getElementById("Muñeco");

 let textoCifrado= texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat"); 

 if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    ilustracion.src ="./Img/Muñeco 2.png";
 } else {
    ilustracion.src = "./Img/Muñeco.png"; 
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert ('Debes ingresar algún texto');
 }
}

encriptar()
