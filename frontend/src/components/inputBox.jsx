
export function InputBox({title,placeHolder,onChange}){
    return (
        <div>
            <div className="text-sm text-left font-medium py-2 ">
                {title}
            </div>
            <input  onChange={onChange} placeholder={placeHolder} className="w-full px-2 py-1 border rounded-md border-slate-300"/>
        </div>
    )
}