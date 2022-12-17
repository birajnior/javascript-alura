console.log('Trabalhando com condicionais');
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

const idadeComprador = 14
const estaAcompanhada = true
const temPassagemComprada = true

console.log('Destinos possíveis: ');
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log('Comprador maior de idade');
//     listaDeDestinos.splice(1, 1) // Removendo destino
// } else if (estaAcompanhada) {
//     //A pessoa é menor de idade
//     console.log('Comprador está acompanhado');
//     listaDeDestinos.splice(1, 1) // Removendo destino
// } else {
//     console.log('Comprador não é maior de idade, não é possivél vender.');
// }



if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Boa Viagem!!!');
    listaDeDestinos.splice(2, 1) // Removendo destino
} else {
    console.log('Comprador não é maior de idade, não é possivél vender.');
}

console.log('Embarque: \n\n');
if (idadeComprador >= 18 || estaAcompanhada == true && temPassagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log('Você não pode embarcar');
}

console.log(listaDeDestinos);
