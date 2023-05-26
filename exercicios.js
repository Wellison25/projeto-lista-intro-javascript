// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const resposta = prompt("Digite a altura")
  console.log(resposta)
  const resposta1 = prompt("Digite a largura")
  console.log(resposta1)

}

// EXERCÍCIO 02
let ano = prompt("Qual é o ano que estamos?")
let nascimento = prompt("Qual é o ano do seu nascimento?")

function imprimeIdade() {
  let resultado = imprimeIdade(ano - nascimento);
console.log(resultado);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = "Alice"
  const idade = '28'
  const email = "alice@gmail.com"
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
console.log(frase)
}

function imprimeInformacoesUsuario1(){
  const nome = "João"
  const idade = '25'
  const email = "joao@gmail.com"
  const frase = "Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email .
console.log(frase)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
// 1-banana 2-morango 3-abacaxi
const cores = ["Azul", "Amarelo", "Vermelho"]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = "oi"
  const retornaStringEmMaiuscula = frase.toUpperCase()
console.log(retornaStringEmMaiuscula)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   const custo = 3000
   const valorIngresso = 100
  if(valorIngresso >= 100)
    console.log('Espetáculo sem prejuízo')
    
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let string1 = "olá";
  let string2 = "abc";
  
  console.log(string1 === string2);
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const array = [1, 2, 3]
  console.log(array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}