/* Acá va tu código */
// solo manejo del DOM
let offset = document.getElementById('offsetNumberInput');
let naturalText = document.getElementById('naturalText');
let encryptedText = document.getElementById('encryptedText');

document.getElementById('encryptionButton').addEventListener('click', function encrypt() {
  document.getElementById('encryptedText').innerHTML = window.cipher.encode(naturalText.value.toUpperCase(),
    Number(offset.value));
})

document.getElementById('decryptButton').addEventListener('click', function decrypt() {
  document.getElementById('encryptedText').innerHTML = window.cipher.decode(naturalText.value.toUpperCase(),
    Number(offset.value));
})
