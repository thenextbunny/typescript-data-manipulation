import { countBy } from "../utils/index.js";
const filterValue = (transaction) => transaction.value !== null;
export default class Statistics {
    transactions;
    total;
    payments;
    paymentsBy;
    status;
    statusBy;
    week;
    bestDay;
    constructor(transactions) {
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
    setTotal() {
        return this.transactions.filter(filterValue).reduce((acc, item) => {
            return acc + item.value;
        }, 0);
    }
    setPayments() {
        return countBy(this.transactions.map(({ payment }) => payment));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
    setByPayment(key) {
        return this.transactions.filter((transaction) => transaction.payment === key).length;
    }
    setByStatus(key) {
        return this.transactions.filter((transaction) => transaction.status === key).length;
    }
    setWeek() {
        const week = {
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
    setBestDay() {
        const bestDay = Object.entries(this.week).sort((a, b) => {
            return b[1] - a[1];
        });
        console.log(bestDay);
        console.log(bestDay[0][0]);
        return Number(bestDay[0][0]);
    }
}
//# sourceMappingURL=Statistics.js.map