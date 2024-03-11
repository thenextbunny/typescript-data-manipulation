import Statistics from "./class/Statistics.js";
import { type Transaction } from "./interfaces/transaction";
import { type List } from "./utils/index.js";

const populateField = (list: List, elementId: string): void => {
    const element = document.getElementById(elementId);

    if (element !== null) {
        Object.entries(list).forEach(
            ([key, value]) => (element.innerHTML += `<p>${key}: ${value}</p>`)
        );
    }
};

export const populateStatistics = (transactions: Transaction[]): void => {
    const statistics = new Statistics(transactions);
    const totalElement = document.getElementById("total");
    const bestDayElement = document.getElementById("best-day");

    if (totalElement !== null) {
        totalElement.innerHTML +=
            "Total: " +
            statistics.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
    }

    if (bestDayElement !== null) {
        const weekday = ["domingo", "segunda", "terça", "quarta", "quinta", "sábado"];

        bestDayElement.innerHTML = `Dia com mais vendas: ${weekday[statistics.bestDay]}`;
    }

    populateField(statistics.status, "status");
    populateField(statistics.payments, "payments");
};
