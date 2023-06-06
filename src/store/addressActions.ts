import {AppDispatch} from "../store";
import axios from "axios";
import {setListData} from "./addressReducer.ts";


export const getList = (query: string) => async (dispatch: AppDispatch) => {
    const data = JSON.stringify({query: query})
    try{
        const res =  await axios
            .post(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address/`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + "81cfac739870cdac3dede115ebe79e2bb7afae03",
                        "X-Secret": "a7335fdf88916e19095e0fa410d1dfc8cfa8d9c8"
                    },
                })
        dispatch(setListData(res.data.suggestions))
    }catch (e){
        console.log(e)
    }
}