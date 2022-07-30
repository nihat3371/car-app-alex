import axios from "axios";

const url = "https://react-challenge-api.azurewebsites.net/vehicles";

const fetchGetUsers = async () => {
    try {
        const response = await axios.get(url);
        return Promise.resolve(response.data)
    }
    catch (error) {
        console.log(error);
    }

}



export default fetchGetUsers;