import {handleHttpErrors, makeOptions} from "./apiFacade.js";
import {CREATE_RIDE_ENDPOINT, DELETE_RIDE_ENDPOINT, GET_RIDE_ENDPOINT, UPDATE_RIDE_ENDPOINT} from "../settings.js";

export const getAllRides = async () => {
    const options = makeOptions(GET_RIDE_ENDPOINT.method, true);
    const response = await fetch(GET_RIDE_ENDPOINT.url, options);
    try {
        return (await (await handleHttpErrors(response)).json());
    } catch (error) {
        console.log((await error).message);
        return false;
    }
}

export const createRide = async (form) => {
    const options = makeOptions(CREATE_RIDE_ENDPOINT.method, true, form);
    const response = await fetch(CREATE_RIDE_ENDPOINT.url, options);
    try {
        return (await (await handleHttpErrors(response)).json());
    } catch (error) {
        console.log((await error).message);
        return false;
    }
}

export const getRide = async (id) => {
    const options = makeOptions(GET_RIDE_ENDPOINT.method, true);
    const response = await fetch(GET_RIDE_ENDPOINT.url + id, options);
    try {
        return (await (await handleHttpErrors(response)).json());
    } catch (error) {
        console.log((await error).message);
        return false;
    }
}

export const updateRide = async (id, form) => {
    const options = makeOptions(UPDATE_RIDE_ENDPOINT.method, true, form);
    const response = await fetch(UPDATE_RIDE_ENDPOINT.url + id, options);
    try {
        return (await (await handleHttpErrors(response)).json());
    } catch (error) {
        console.log((await error).message);
        return false;
    }
}

export const deleteRides = async (id) => {
    const options = makeOptions(DELETE_RIDE_ENDPOINT.method, true);
    const response = await fetch(GET_RIDE_ENDPOINT.url + id, options);
    try {
        return (await (await handleHttpErrors(response)).json());
    } catch (error) {
        console.log((await error).message);
        return false;
    }
}
