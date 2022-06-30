export const getDataFromLocalStorage = () => {
    const saved = localStorage.getItem("name");
    return saved
}

export const setDataToLocalStorage = (key, data) => {
    localStorage.setItem(`${key}`, JSON.stringify(data));
}