import axios from "axios";

export default function getDetail(id){
    return async function(dispatch){
        try{
            const response = await axios.get(`/${id}`)
            return dispatch({
                type: "GET_DETAIL",
                payload: response.data
            })
        }catch(error){
            console.error(error)
        }
    }
}