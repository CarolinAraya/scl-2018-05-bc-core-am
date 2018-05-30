// aca ira la logica

window.cipher = {
  encode: (text, offset) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      //var inputAscii = text.charCodeAt(i);
      let outputAscii = (text.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;

      if (text.charCodeAt(i) === 32 ) {
        outputAscii = " ";
        result += " ";
      }

      result += String.fromCharCode(outputAscii);
    }  
    return result;
  },
  decode: (text, offset) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      //var inputAscii = text.charCodeAt(i);
      let outputAscii = (text.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;//==>(no era -65, era +)
      
      if (text.charCodeAt(i) === 32 ) {
        outputAscii = " ";
        result += " ";
      }

      result += String.fromCharCode(outputAscii);
    }  
    return result;
  }
}
