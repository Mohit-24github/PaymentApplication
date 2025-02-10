import axios from "axios"
import { Appbar } from "../components/appbar"
import { Balance } from "../components/balance"
import { ValueAtom } from "../store/atoms/userBalance"
import { useRecoilValue} from 'recoil'
import { useEffect } from "react"
import { Users } from "../components/user"
//Math.round(response.data.balance*100)/100
export const Dashboard =function(){
    // const value = useRecoilValue(ValueAtom)
    const value = 10000
    return <div>
        <Appbar />
        <Balance value={value}/>
        <Users />
    </div>
}