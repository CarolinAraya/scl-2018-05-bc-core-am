/* Acá va tu código */
// solo manejo del DOM
let offset = document.getElementById('offsetNumberInput');
let naturalText = document.getElementById('naturalText');
let encryptedText = document.getElementById('encryptedText');

document.getElementById('encryptionButton').addEventListener('click', function encrypt() {
  window.cipher.encode();
})

document.getElementById('decryptButton').addEventListener('click', function decrypt() {
    window.cipher.decode();
})
