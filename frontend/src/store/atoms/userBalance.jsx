import {selector} from "recoil"
import axios from "axios"

export const ValueAtom = selector({
    key: "Value",
    get: function({get}){
        setInterval(async function(){
            let token = localStorage.token
            const response = await axios.get("http://localhost:3000/api/v1/account/balance",
                {
                    headers:{
                        Authorization:" Bearer "+token
                        }
                    }
                )
                console.log(response.data)
                return response.data
        },1000)
    }
})