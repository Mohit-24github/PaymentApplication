import {Link} from "react-router-dom"

export function BottomWarning({text,buttonText,link}){
    return (
        <div className="flex justify-center py-2 text-base">
            <div>
                {text}
            </div>
            <Link to={link} className="pointer underline pl-1 cursor-pointer">{buttonText}</Link>
        </div>
    )
}