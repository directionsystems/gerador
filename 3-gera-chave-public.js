var CryptoJS = require('cryptojs').Crypto
var ec = require('eccrypto')

var chavePrivada = process.argv[2]

var chavePublica = ec.getPublic(Buffer(CryptoJS.util.hexToBytes(chavePrivada)))

console.log("Chave Publica: " + CryptoJS.util.bytesToHex(chavePublica))