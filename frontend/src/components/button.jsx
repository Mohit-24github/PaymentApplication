
export function Button({onClick,text}){
    return (
        <div>
            <button onClick={onClick} type='button' className="w-full text-white bg-gray-800 focus:outline-none focus:ring-gray-400 focus:ring-4 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{text}</button>
        </div>
    )
}