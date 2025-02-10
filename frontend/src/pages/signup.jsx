import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputBox"
import { Subheading } from "../components/subHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/bottomWarning"

export const Signup = () => {   
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    return <div className=" flex justify-center bg-slate-400 h-screen ">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading title={"Sign Up"} />
                <Subheading title={"Enter Your Details"}/>
                <InputBox onChange={function(e){
                    setfirstName(e.target.value)
                }} placeHolder={'eg: Mohit'} title={"First Name"}></InputBox>
                <InputBox onChange={function(e){
                    setlastName(e.target.value)
                }} placeHolder={'eg: Somani'} title={"Last Name"}></InputBox>
                <InputBox onChange={function(e){
                    setUsername(e.target.value)
                }} placeHolder={'eg: example@gmail.com'} title={"Email"}></InputBox>
                <InputBox onChange={function(e){
                    setPassword(e.target.value)
                }} placeHolder={'eg: 123456'} title={"Password"}></InputBox>
                <div className="pt-4">
                    <Button onClick={async function (){
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            userName,
                            firstName,
                            lastName,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                    }} text={"Sign Up"}/>
                </div>
                <BottomWarning text={"Already have an Account ?"} buttonText={"Sign In"} link={"/signin"} />
            </div>
        </div>
    </div>
}