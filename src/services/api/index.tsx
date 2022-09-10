import axios from "axios"


export const getCoronaDatas = () => {
  return axios.get(`https://disease.sh/v3/covid-19/countries`)
}