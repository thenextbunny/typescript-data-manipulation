import {
    type Transaction,
    type TransactionPayment,
    type TransactionStatus,
} from "../interfaces/transaction";
import { countBy, type List } from "../utils/index.js";

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
    week;
    bestDay;
    constructor(transactions: Transaction[]) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payments = this.setPayments();
        this.paymentsBy = {
            card: this.setByPayment("Cartão de Crédito"),
            slip: this.setByPayment("Boleto"),
        };
        this.status = this.setStatus();
        this.statusBy = {
            paid: this.setByStatus("Paga"),
            refused: this.setByStatus("Recusada pela operadora de cartão"),
            pending: this.setByStatus("Aguardando Pagamento"),
        };
        this.week = this.setWeek();
        this.bestDay = this.setBestDay();
    }

    private setTotal(): number {
        return this.transactions.filter(filterValue).reduce((acc, item) => {
            return acc + item.value;
        }, 0);
    }

    private setPayments(): List {
        return countBy(this.transactions.map(({ payment }) => payment));
    }

    private setStatus(): List {
        return countBy(this.transactions.map(({ status }) => status));
    }

    private setByPayment(key: TransactionPayment): number {
        return this.transactions.filter((transaction) => transaction.payment === key).length;
    }

    private setByStatus(key: TransactionStatus): number {
        return this.transactions.filter((transaction) => transaction.status === key).length;
    }

    private setWeek(): Record<number, number> {
        const week: Record<number, number> = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
        };

        this.transactions.forEach((transaction) => {
            const day = transaction.date.getDay();
            week[day]++;
        });

        return week;
    }

    private setBestDay(): number {
        const bestDay = Object.entries(this.week).sort((a, b) => {
            return b[1] - a[1];
        });

        console.log(bestDay);
        console.log(bestDay[0][0]);

        return Number(bestDay[0][0]);
    }
}
