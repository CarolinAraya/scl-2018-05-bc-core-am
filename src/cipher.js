// aca ira la logica

window.cipher = {
  encode: (text, offset) => {
    var result = "";

    for (var i = 0; i < text.length; i++) {
      //var inputAscii = text.charCodeAt(i);
      var outputAscii = (text.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;

      result += String.fromCharCode(outputAscii);
    }  
    return result;
  },
  decode: (text, offset) => {
    var result = "";

    for (var i = 0; i < text.length; i++) {
      //var inputAscii = text.charCodeAt(i);
      var outputAscii = (text.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;//==>(no era -65, era +)

      result += String.fromCharCode(outputAscii);
    }  
    return result;
  }
}
