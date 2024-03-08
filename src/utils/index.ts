/**
 * This function normalize the price string from the API to a number or null
 * @param price "1.2500,00"
 */
export const formatPriceToNumber = (price: string): number | null => {
    const formatted = Number(price.replace(".", "").replace(",", "."));

    if (isNaN(formatted)) return null;
    return formatted;
};

/**
 * Normalize the string date from the API to Date
 * @param
 */
export const formatStringToDate = (text: string): Date => {
    const [date, time] = text.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minute] = time.split(":").map(Number);

    return new Date(year, month, day, hour, minute);
};

/**
 * Format number to BRL currency
 * @param value
 */
export const formatCurrency = (value: unknown): string | null => {
    if (Boolean(value) && typeof value === "number")
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

    return null;
};

/**
 * Format Date to locale string
 */
export const formatDate = (date: Date): string =>
    date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });

/**
 *
 */
/*
interface CountBy {
    [key: string]: number;
}

export const countBy = (arr: Array<string | number>): number => {
    return arr.reduce((acc: CountBy, item) => {
        if (acc[item] !== 0) {
            acc[item] += 1;
        } else {
            acc[item] += 1;
        }

        return acc;
    }, {});
};
*/
