import * as Config from "./../constants/Config";
import axios from "axios";

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch(function (error) {
    console.log(error);
  });
}

export async function getFetch(endpoint) {
  let result = await axios({
    method: "GET",
    url: `${Config.API_URL}/${endpoint}`,
  });
  return result.data;
}
