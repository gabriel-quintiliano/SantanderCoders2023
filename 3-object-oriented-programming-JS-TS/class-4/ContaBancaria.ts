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

    getNumeroConta() {
        return this.numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    consultarSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor > this.saldo) return // implementar --> throw new SaldoInsuficiente()
        this.saldo -= valor;
    }
}

class ContaPoupanca extends ContaBancaria implements IOperacoesBancarias {

    juros: number;

    constructor(titular: string, numeroConta: string, saldoInicial: number, porcentagemJurosMensal: number) {
        super(titular, numeroConta, saldoInicial);
        this.juros = porcentagemJurosMensal;
    }

    consultarSaldo() {
        return this.getSaldo();
    }
}
