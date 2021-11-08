export const fetchData = (fetchMethod, successMethod, errorMethod, period) => {

    return fetchMethod(period)
            .then(data => {
                successMethod(data);
            })
            .catch(error => errorMethod(error));

};