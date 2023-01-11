export class ContaCorrente {
    agencia;
    cliente;




    //#saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields Proprosta para metodo de privacidade.
    _saldo = 0; // enquanto não tem nenhum metodo implementado utiliza-se o underline(_) para informar que o metodo é privado e que não deve ser mexido e/ou exibido.

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }
}