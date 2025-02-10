import { useEffect, useState } from "react";
import axios from "axios";
import { InputBox } from "./inputBox";
import { Subheading } from "./subHeading";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Users(){
    const [users,setUsers] = useState([])
    const [filter,setFilter] = useState("")

    useEffect(()=> {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        .then(response => {
            setUsers(response.data.user)
        })
    },[filter])

    return <div className="px-4 py-4">
        <div className=" font-bold text-black text-xl py-4 ">
            Users
        </div>
        <InputBox onChange={function (e){
            setFilter(e.target.value)
        }} placeHolder={"Search User"} title={""} />
        <div className="pt-4">
            {users.map(user =><User user={user} />)}
        </div>
    </div>
}

function User({user}){
    const navigate = useNavigate()
    return <div className="flex justify-between pt-3">
    <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                {user.firstName[0]}
            </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
    </div>

    <div className="flex flex-col justify-center h-ful">
        <Button onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }} text={"Send Money"} />
    </div>
</div>
}