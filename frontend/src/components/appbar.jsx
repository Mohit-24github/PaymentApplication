import { Heading } from "./heading"
import { Subheading } from "./subHeading"

export const Appbar = function (){
    return <div className="flex justify-between self-center shadow-md h-20 ">
        <div className="px-4">
            <Heading title={"PayTM App"} />
        </div>
        <div className="flex justify-center self-center px-4">
            <Subheading title={"Hello"} />
            <div className="self-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
        </div>
    </div>
}