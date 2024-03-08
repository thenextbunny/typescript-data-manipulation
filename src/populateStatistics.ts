import Statistics from "./class/Statistics.js";
import { type Transaction } from "./interfaces/transaction";

export const populateStatistics = (transactions: Transaction[]): void => {
    const statistics = new Statistics(transactions);

    console.log(statistics);

    const totalElement = document.getElementById("total");

    if (totalElement !== null) {
        totalElement.innerHTML +=
            " " +
            statistics.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
    }
};
