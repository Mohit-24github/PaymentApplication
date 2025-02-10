import { Subheading } from "./subHeading";

export function Balance({value}){
    return <div className="flex py-5">
        <div className="font-semibold text-lg self-center px-4">
            Your Balance
        </div>
        <div className="font-bold text-lg self-center px-4">
            Rs {value}
        </div>
    </div>
}