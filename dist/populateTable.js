import { formatCurrency, formatDate } from "./utils/index.js";
export const populateTable = (transactions) => {
    const tbody = document.getElementById("transactions");
    if (tbody == null)
        return;
    transactions.forEach((transaction) => {
        tbody.innerHTML += `
            <tr>
                <td>${transaction.name}</td>
                <td>${transaction.email}</td>
                <td>${transaction.value !== null ? formatCurrency(transaction.value) : "Sem preço"}</td>
                <td>${transaction.payment}</td>
                <td>${transaction.status}</td>
                <td>${formatDate(transaction.date)}</td>
                <td>${transaction.isNew ? "Sim" : "Não"}</td>
            </tr>
            `;
    });
};
//# sourceMappingURL=populateTable.js.map