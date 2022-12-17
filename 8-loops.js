console.log('\nTrabalhando com loops');
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

const idadeComprador = 14
const estaAcompanhada = true
let temPassagemComprada = false
const destino = 'Salvador'

console.log('\nDestinos possíveis: ');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
let destinoExiste = false

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        break;
    } 

    contador += 1
}

console.log('Destino existe: ', destinoExiste);