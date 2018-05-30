// aca ira la logica

window.cipher = {
  encode: (text, offset) => {
    var result = "";

    for (var i = 0; i < text.length; i++) {
      var inputAscii = text.charCodeAt(i);
      var outputAscii = (inputAscii - 65 + offset) % 26 + 65;

      result += String.fromCharCode(outputAscii);
    }  
    return result;
  },
  decode: (text, offset) => {
    var result = "";

    for (var i = 0; i < text.length; i++) {
      var inputAscii = text.charCodeAt(i);
      var outputAscii = (inputAscii - 65 - offset) % 26 + 65;

      result += String.fromCharCode(outputAscii);
    }  
    return result;
  }
}
