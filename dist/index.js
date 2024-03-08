import { getData } from "./getData.js";
import { normalizeTransaction } from "./normalizeTransaction.js";
import { populateStatistics } from "./populateStatistics.js";
import { populateTable } from "./populateTable.js";
const handleData = async () => {
    const data = await getData("https://api.origamid.dev/json/transacoes.json");
    if (data === null)
        return;
    const transactions = data.map(normalizeTransaction);
    populateTable(transactions);
    populateStatistics(transactions);
};
void handleData();
//# sourceMappingURL=index.js.map