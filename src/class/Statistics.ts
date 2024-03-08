import {
    type Transaction,
    type TransactionPayment,
    type TransactionStatus,
} from "../interfaces/transaction";

type TransactionValue = Transaction & { value: number };

const filterValue = (transaction: Transaction): transaction is TransactionValue =>
    transaction.value !== null;

export default class Statistics {
    transactions;
    total;
    payments;
    paymentsBy;
    status;
    statusBy;
    constructor(transactions: Transaction[]) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payments = this.setPayments();
        this.paymentsBy = {
            card: this.setByPayment("Cartão de Crédito"),
            slip: this.setByPayment("Boleto"),
        };
        // TODO status
        this.status = 1;
        this.statusBy = {
            paid: this.setByStatus("Paga"),
            refused: this.setByStatus("Recusada pela operadora de cartão"),
            pending: this.setByStatus("Aguardando Pagamento"),
        };
    }

    private setTotal(): number {
        return this.transactions.filter(filterValue).reduce((acc, item) => {
            return acc + item.value;
        }, 0);
    }

    // TODO
    private setPayments(): number {
        const payments = this.transactions.map(({ payment }) => payment);

        console.log(payments);

        return 1;
    }

    private setByPayment(key: TransactionPayment): number {
        return this.transactions.filter((transaction) => transaction.payment === key).length;
    }

    private setByStatus(key: TransactionStatus): number {
        return this.transactions.filter((transaction) => transaction.status === key).length;
    }
}
