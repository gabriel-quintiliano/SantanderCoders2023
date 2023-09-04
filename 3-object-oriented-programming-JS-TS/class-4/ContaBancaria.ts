interface IOperacoesBancarias {
    depositar: (valor: number) => void;
    sacar: (valor: number) => void;
}

class ContaBancaria implements IOperacoesBancarias {

    titular: string;
    private numeroConta: string;
    private saldo: number;

    constructor(titular: string, numeroConta: string, saldoInicial: number) {
        this.titular = titular;
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }

    getNumeroConta(): string {
        return this.numeroConta;
    }

    getSaldo(): number {
        return this.saldo;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        Logger.logOperation(this, "Depósito", valor)
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            Logger.logMessage(this, "Operação Cancelada [saldo insuficiente]")
            return
        };
        this.saldo -= valor;
        Logger.logOperation(this, "Saque", valor)
    }
}

class ContaPoupanca extends ContaBancaria implements IOperacoesBancarias {

    juros: number;

    constructor(titular: string, numeroConta: string, saldoInicial: number, porcentagemJurosMensal: number) {
        super(titular, numeroConta, saldoInicial);
        this.juros = porcentagemJurosMensal;
    }

    consultarSaldo() {
        return this.getSaldo() * this.juros / 100;
    }
}

class Logger {
    static logOperation(conta: ContaBancaria, operationName: string, valor: number): void {
        console.log(`${operationName} de R$${valor} na conta ${conta.getNumeroConta()}\nNovo total = R$${conta.getSaldo()}\n`)
    }

    static logMessage(conta: ContaBancaria, message: string) {
        console.log(`Conta: ${conta.getNumeroConta()}: ${message}`)
    }
}

const contaA = new ContaBancaria("Gabriel Quintiliano", "123456", 15)
contaA.sacar(10)
contaA.depositar(100)

const contaB = new ContaBancaria("Ramos Guimarães", "789012", 225)
contaB.sacar(1000)
contaB.depositar(100)

const contaC = new ContaBancaria("Ramos Guimarães", "789012", 430)
contaC.sacar(100)
contaC.depositar(198)