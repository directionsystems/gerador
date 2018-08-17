// Converte a chave privada para o formato (WIF) que pode ser importada
// WIF - Wallet imported format

var CryptoJS = require('cryptojs').Crypto
var bs58 = require('bs58')

// https://en.bitcoin.it/wiki/List_of_address_prefixes
var versao = '80'

// Recebe a chave gerada pelo primeiro arquivo
var chavePrivada = process.argv[2]

// Soma a versão + a chave privada
var versaoEChavePrivada = versao + chavePrivada

// Passa pelo primeiro checksum (Da versão + a chave privada)
var primeiroSHA = CryptoJS.SHA256(CryptoJS.util.hexToBytes(versaoEChavePrivada))

// Passa pra o segundo checksum
var segundoSHA = CryptoJS.SHA256(CryptoJS.util.hexToBytes(primeiroSHA))

// Pega do 0 ao 8 
var checksum = segundoSHA.substr(0,8)

// O WIf final é a versão e ChavePrivada + o checksum
var wif = versaoEChavePrivada + checksum

// Converte o WIF de base 16 para a base 58
var wifFinal = bs58.encode(CryptoJS.util.hexToBytes(wif)) 

console.log("Chave privada no formato WIF (base58): " + wifFinal)
