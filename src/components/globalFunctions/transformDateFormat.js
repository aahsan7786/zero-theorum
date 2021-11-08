const today = new Date();

export const transformDateFormat = (date = today, separator = '-') => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    dd < 10 ? dd = '0' + dd : dd;
    mm < 10 ? mm = '0' + mm : mm;
    return yyyy + separator + mm + separator + dd;
};