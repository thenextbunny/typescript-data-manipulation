const filterValue = (transaction) => transaction.value !== null;
export default class Statistics {
    transactions;
    total;
    payments;
    paymentsBy;
    status;
    statusBy;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payments = this.setPayments();
        this.paymentsBy = {
            card: this.setByPayment("Cartão de Crédito"),
            slip: this.setByPayment("Boleto"),
        };
        this.status = 1;
        this.statusBy = {
            paid: this.setByStatus("Paga"),
            refused: this.setByStatus("Recusada pela operadora de cartão"),
            pending: this.setByStatus("Aguardando Pagamento"),
        };
    }
    setTotal() {
        return this.transactions.filter(filterValue).reduce((acc, item) => {
            return acc + item.value;
        }, 0);
    }
    setPayments() {
        const payments = this.transactions.map(({ payment }) => payment);
        console.log(payments);
        return 1;
    }
    setByPayment(key) {
        return this.transactions.filter((transaction) => transaction.payment === key).length;
    }
    setByStatus(key) {
        return this.transactions.filter((transaction) => transaction.status === key).length;
    }
}
//# sourceMappingURL=Statistics.js.map