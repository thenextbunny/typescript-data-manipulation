export const getData = async <T>(url: string): Promise<T | null> => {
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Error: " + response.status);

        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
};
