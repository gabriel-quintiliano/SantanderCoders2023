const evalBtn = document.getElementById("eval-btn");
const imcElem = document.getElementById("imc");
const msgFinal = document.getElementById("msgFinal")

evalBtn.addEventListener('click', () => {

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    let imc = peso / altura**2;
    /* Para limitar o IMC a 1 casa decimal imc.toFixed(1) seria uma opção, mas essa função acaba
       arredondando o resultado final, assim por exemplo 18.55 ("abaixo do peso") é arredondado
       para 18.6 ("no peso ideal"). */
    imc = Math.floor(imc*10)/10; // ex: imc = 18.55 --> Math.floor(18.55*10)/10 = Math.floor(185.5)/10 = 185/10 = 18.5
    // Se quisessemos obter até 2 casas decimais --> Math.floor(imc*100)/100
    // Se quisessemos obter até 3 casas decimais --> Math.floor(imc*1000)/1000

    imcElem.value = imc;

    let condition = "com obsidade grau III (mórbida)";

    if (imc < 18.6) {
        condition = "abaixo do peso";
    } else if (imc < 25) {
        condition = "no peso ideal";
    } else if (imc < 30) {
        condition = "levemente acima do peso";
    } else if (imc < 35) {
        condition = "com obsidade grau I";
    } else if (imc < 40) {
        condition = "com obsidade grau II (severa)";
    }

    msgFinal.textContent = `Seu imc é ${imc} e você está ${condition}`;
})