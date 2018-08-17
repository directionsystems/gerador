 

var CryptoJS = require('cryptojs').Crypto

// Passo 1 - Criar uma variável com 32 bytes randomicos

var chavePrivada = CryptoJS.util.randomBytes(32)

// Converte para o formato Hexadecimal em maiúsculo

var  chavePrivadaHex = CryptoJS.util.bytesToHex(chavePrivada).toUpperCase()

console.log("Chave privada: " + chavePrivadaHex)