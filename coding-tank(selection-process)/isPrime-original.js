// Questão 1 - Resposta:

// usei const aqui para não mover o pointer sem querer, e no final ainda conseguimos alterar o conteúdo
// dentro do array sem problemas assim
const knownPrimes = [31]

function isPrime(num) {

    // caso para números menores que 0
    if (num < 0) {
        console.log("Não é possível verificar se este número é primo")

    // caso para os números 0 e 1
    } else if (num < 2) {
        console.log(`${num} não é um número primo!`)

    // caso que vai tratar de qualquer outro número aleatório
    } else {
        /*  Sabendo que um número primo é aquele que é divisível somente por 1 e ele mesmo, primeiro
            tentaremos dividir o número fornecido pelos números primos que já conhecemos (que estão
            armazenados na variável knownPrimes), assim se o resto da divisão realizada for 0,
            podemos ter a certeza que o número fornecido não é primo, informos essa info para o
            usuário e encerramos a função */
        for (let primeDivider of knownPrimes) {
            if (num % primeDivider === 0)
            {
                //console.log(`${num} não é um número primo!x`)
                return
            }
        }
        
        /*  Caso não tenhamos conseguir dividir número fornecido por um dos knownPrimes, tentaremos
            descobrir através do loop abaixo se existe de fato um divisor para tal ou não (configurando
                assim o número como um primo também) */

        /*  Começaremos a contagem do número abaixo logo após o último knowmPrime, caso não haja ainda
            um knownPrime, consideraremos o início como 2 */
        let lastKnowPrime = knownPrimes.length > 0 ? knownPrimes[knownPrimes.length - 1] : 2

        for (let possibleDivider = lastKnowPrime + 1; possibleDivider < num; possibleDivider++) {
            if (num % possibleDivider === 0)
            {
                //console.log(`${num} não é um número primo!`)
                return
            }  
        }
        
        // Se estamos aqui, o número fornecido é um número primo, informamos o usuário disso e
        // adicionamos este no array knownPrimes
        console.log(`${num} é um número primo!`)
        if (!knownPrimes.includes(num)){
            //knownPrimes.push(num)
        }
    }
}

// Para testar, entre 0 e 1000 existem 168 números primos
let primeCounter = 0;
for (let i = 0; i < 1000; i++){
    if (isPrime(i)) primeCounter++;
}

console.log(primeCounter)