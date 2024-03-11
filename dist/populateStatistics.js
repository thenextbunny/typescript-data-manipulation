import Statistics from "./class/Statistics.js";
const populateField = (list, elementId) => {
    const element = document.getElementById(elementId);
    if (element !== null) {
        Object.entries(list).forEach(([key, value]) => (element.innerHTML += `<p>${key}: ${value}</p>`));
    }
};
export const populateStatistics = (transactions) => {
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
//# sourceMappingURL=populateStatistics.js.map