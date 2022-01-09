import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "b86a7c6700msh1b49ab78bc422ecp1165dcjsn8b9a50a2c5dd",
    },
  });
  return data;
};
