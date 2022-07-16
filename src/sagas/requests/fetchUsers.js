const url = "https://react-challenge-api.azurewebsites.net/vehicles";

const fetchGetUsers = () => {
    return fetch(url, {
        method: "GET",
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;

        });
};

export default fetchGetUsers;