import { type TransactionAPI, type Transaction } from "./interfaces/transaction";
import { formatPriceToNumber, formatStringToDate } from "./utils/index.js";

export const normalizeTransaction = (transaction: TransactionAPI): Transaction => {
    return {
        date: formatStringToDate(transaction.Data),
        email: transaction.Email,
        id: transaction.ID,
        isNew: Boolean(transaction["Cliente Novo"]),
        name: transaction.Nome,
        payment: transaction["Forma de Pagamento"],
        status: transaction.Status,
        value: formatPriceToNumber(transaction["Valor (R$)"]),
    };
};
