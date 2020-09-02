/*  Estudo do curso de JS da platafoma DIO
     Érick Luz Cavalcante
     02/09/2020 */


// Definindo uma varivel string 
const texto = 'Texto';


//Quantidade de caracteres em uma string
const textoLength = texto.length;
console.log('Quantidade de letras: '+textoLength);

// retorna um array quebrando a string por um delimitador
// no caso a posição 0 fica com Te ea posição 1 com to
const textoSplitted = texto.split('x');
console.log('\nArray com as possições separadas pelo delimitador: ' + textoSplitted);

//Busca um valor e substitui por outro
// Primeiro parametro a busca 
// Segundo o que ira ser inserido no lugar

const textoReplaced = texto.replace("Text", "Txet");
console.log('\nSubstituição de um valor por outro: ' + textoReplaced);

// Retorna uma fatia do valor da string
// no exemplo sera retornado apenas o ultimo caracter da varivel texto
const textoLastChar = texto.slice(-1);
console.log('\nUltimo caracter: ' + textoLastChar);
// Todos os caracteres menos o ultimo
const textoAllWithoutLastChar = texto.slice(0,-1); //0 = inicio , -1 fim
console.log('\nTodos os caracteres menos o ultimo: ' + textoAllWithoutLastChar);

// Segundo caracter até o final
const textoSecondToEnd = texto.slice(1); 
console.log('\nSegundo caracter até o final: ' + textoSecondToEnd);

// Retona N caracters a partir de uma posição

const textoTwoCharsBeforeFist = texto.substr(0,2);
console.log('\nAs duas primeiras letras: ' + textoTwoCharsBeforeFist);




