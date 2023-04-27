//funcion para encriptar
const encryptText = () => {
  
    let text = document.getElementById("inputText").value; //Guardamos texto ingresado
    let encryptedText = ""; //texto final

    //recorremos texto ingresado 
    for (let i = 0; i < text.length; i++) {
      let char = text[i]; //Guarda cada valor de i en char
      if (char === "e") {  //si se encontro una e
        encryptedText += "enter"; //agrega al texto final 
      } else if (char === "i") {//si se encontro una i
        encryptedText += "imes"; //agrega al texto final
      } else if (char === "a") { //si se encontro una a
        encryptedText += "ai";// agrega al texto final
      } else if (char === "o") { //si se encontro una o
        encryptedText += "ober"; //agrega al texto final
      } else if (char === "u") {//si se encontro una u
        encryptedText += "ufat"; //agrega al texto final
      } else { //en caso que no fue una vocal
        encryptedText += char;//agrega el valor de i
      }
    }

    document.getElementById("outputText").textContent = encryptedText; //escribe el texto final
  };

  //Funcion para desencriptar
  const decryptText = () => {
    let encryptedText = document.getElementById("inputText").value;
    let decryptedText = "";
    let i = 0;

    while (i < encryptedText.length) {
      let char = encryptedText[i];
      if (encryptedText.slice(i, i + 5) === "enter") {
        decryptedText += "e";
        i += 5;
      } else if (encryptedText.slice(i, i + 4) === "imes") {
        decryptedText += "i";
        i += 4;
      } else if (encryptedText.slice(i, i + 2) === "ai") {
        decryptedText += "a";
        i += 2;
      } else if (encryptedText.slice(i, i + 4) === "ober") {
        decryptedText += "o";
        i += 4;
      } else if (encryptedText.slice(i, i + 4) === "ufat") {
        decryptedText += "u";
        i += 4;
      } else {
        decryptedText += char;
        i++;
      }
    }

    document.getElementById("outputText").textContent = decryptedText;
  };


    //funcion de boton de copiapapeles 
  const copyText = () => {
    let text = document.getElementById("outputText").textContent;

    navigator.clipboard.writeText(text).then(() => {
      alert("Texto copiado al portapapeles");
    });
  };