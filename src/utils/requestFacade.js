import { RIDE_ENDPOINT } from "../settings";
import { handleHttpErrors, makeOptions } from "./apiFacade";

export const sendRequest = async (id) => {
  const options = makeOptions("POST", true, id);
  const response = await fetch(`${RIDE_ENDPOINT}/${id}/requests`, options);
  const json = (await handleHttpErrors(response)).json();
};
