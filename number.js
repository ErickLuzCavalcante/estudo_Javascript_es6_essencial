const numero = 12.4032

//Transformar um numero em uma String
const numeroAsString = numero.toString();
console.log ("Numero transformado em uma string: " , typeof(numeroAsString));


// Fixa o numero de casas decimais
const fixedTwoDecimals = numero.toFixed(2);
console.log("Numero com duas casas decimais: " + fixedTwoDecimals);

// Transforma uma string em um float
console.log("String para float: ", parseFloat("13.22"));

//Transforma uma string em um int
console.log("String para int: ", parseInt("13.22"));