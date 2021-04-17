const API = process.env.API;

const getData = async(id) => {
    //const apiURl = id ? `${API}${id}` : API;
    const apiURl = 'https://randomuser.me/api/'
    try {
        const response = await fetch(apiURl);
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;