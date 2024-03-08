import Statistics from "./class/Statistics.js";
export const populateStatistics = (transactions) => {
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
//# sourceMappingURL=populateStatistics.js.map