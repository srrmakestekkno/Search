const utils = {
    formatDate: (value) => {
        const inputDate = new Date(value);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const year = inputDate.getFullYear().toString();
        const hours = inputDate.getHours().toString().padStart(2, '0');
        const minutes = inputDate.getMinutes().toString().padStart(2, '0');

        const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
        return formattedDate;
    },
    formatDateYYYYMMDD: (value) => {
        const inputDate = new Date(value);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const year = inputDate.getFullYear().toString();

        const formattedDate = `${year}/${month}/${day}`;
        return formattedDate;
    }
};

export default utils;