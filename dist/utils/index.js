export const formatPriceToNumber = (price) => {
    const formatted = Number(price.replace(".", "").replace(",", "."));
    if (isNaN(formatted))
        return null;
    return formatted;
};
export const formatStringToDate = (text) => {
    const [date, time] = text.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minute] = time.split(":").map(Number);
    return new Date(year, month, day, hour, minute);
};
export const formatCurrency = (value) => {
    if (Boolean(value) && typeof value === "number")
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    return null;
};
export const formatDate = (date) => date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    month: "2-digit",
    year: "2-digit",
});
export const countBy = (array) => {
    return array.reduce((acc, item) => {
        if (acc[item] !== undefined) {
            acc[item] += 1;
        }
        else {
            acc[item] = 1;
        }
        return acc;
    }, {});
};
//# sourceMappingURL=index.js.map