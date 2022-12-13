import { SCHOOL_ENDPOINT } from "../settings";

export const getSchools = async () => {
  return fetch(SCHOOL_ENDPOINT)
    .then((res) => {
      return res.json()
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
