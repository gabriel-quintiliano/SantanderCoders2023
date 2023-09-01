class ContaBancaria {

    titular: string;
    private numeroConta: string;
    private saldo: number;

    constructor(titular: string, numeroConta: string, saldoInicial: number) {
        this.titular = titular;
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }

    getSaldo() {
        return this.saldo
    }

    consultarSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor > this.saldo) return // implementar --> throw new SaldoInsuficiente()
        this.saldo -= valor;
    }
}

class ContaPoupanca extends ContaBancaria {

    juros: number;

    constructor(titular: string, numeroConta: string, saldoInicial: number) {
        super(titular, numeroConta, saldoInicial);
    }

    consultarSaldo() {
        return this.getSaldo();
    }
}