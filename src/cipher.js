

window.cipher = {
  encode: (text /*string*/, offset /*number*/) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      
      const outputAscii = (text.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;

      if (text.charCodeAt(i) === 32) {
        outputAscii = " ";
        result += " ";//no es necesario, utilizar... "continue"
      }

      result += String.fromCharCode(outputAscii);
    }
    return result;
  },
  decode: (text, offset) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      
      const outputAscii = (text.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;

      if (text.charCodeAt(i) === 32) {
        outputAscii = " ";
        result += " ";
      }

      result += String.fromCharCode(outputAscii);
    }
    return result;
  }
}
