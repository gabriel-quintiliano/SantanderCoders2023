console.log("--INIT--")
setTimeout(()=>{console.log("10 seg")}, 10000)

console.log("--PROCESSANDO--")
setTimeout(()=>{console.log("5 seg first")}, 5000)
setTimeout(()=>{console.log("8 seg dps de tudo")}, 8000)

console.log("--VAI FINALIZAR--")
setTimeout(()=>{console.log("5 seg second")}, 5000)
setTimeout(()=>{console.log("9 seg dps de tudo")}, 9000)
setTimeout(()=>{console.log("7 seg dps de tudo")}, 7000)

console.log("--FINALIZOU--")
setTimeout(()=>{console.log("5 seg dps de tudo")}, 5000)
setTimeout(()=>{console.log("6 seg dps de tudo")}, 6000)