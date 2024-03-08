export type TransactionPayment = "Boleto" | "Cartão de Crédito";
export type TransactionStatus =
    | "Aguardando Pagamento"
    | "Paga"
    | "Recusada pela operadora de cartão";

export interface TransactionAPI {
    "Cliente Novo": 0 | 1;
    Data: string;
    Email: string;
    "Forma de Pagamento": TransactionPayment;
    ID: number;
    Nome: string;
    Status: TransactionStatus;
    "Valor (R$)": string;
}

export interface Transaction {
    date: Date;
    email: string;
    id: number;
    isNew: boolean;
    name: string;
    payment: TransactionPayment;
    status: TransactionStatus;
    value: number | null;
}
