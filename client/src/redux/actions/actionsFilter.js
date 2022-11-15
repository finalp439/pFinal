import axios from "axios";

const server = 'http://localhost:3005'


export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    }
}

export function filterCategory(payload) {
    return {
        type: "FILTER_BY_CATEGORY",
        payload
    }
}
export function getNameQuery(payload){
    return{
        type: 'GET_NAME_QUERY',
        payload
    }
}