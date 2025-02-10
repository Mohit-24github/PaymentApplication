import { useState } from "react"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputBox"
import { Subheading } from "../components/subHeading"
import { Button } from "../components/Button"
import axios from "axios"
import { BottomWarning } from "../components/bottomWarning"
import { useNavigate } from "react-router-dom"

export const Signin = function(){
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    return <div className=" flex justify-center bg-slate-400 h-screen">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading title={"Sign In"}/>
                <Subheading title={"Details to Access Account"}/>
                <InputBox onChange={function(e){
                    setUsername(e.target.value)
                }} title={"Email"} placeHolder={"eg: example@gmail.com"}/>
                <InputBox onChange={function(e){
                    setPassword(e.target.value)
                }} title={"Password"} placeHolder={"eg:123456"}/>
                <div className="pt-4">
                    <Button onClick={async function (){
                        console.log({
                            userName,
                            password
                        })
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            userName,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                    }} text={"Sign In"}/>
                </div>
                <BottomWarning text={"Create an account ?"} buttonText={"Sign up"} link={"/signup"}/>
            </div>
        </div>
    </div>
}