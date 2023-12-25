import { dateConvert } from "../../utils"


export default function NewsItem(props: {id: number, title: string, date: string, body: string }) {
    const { id, title, date, body } = props
    
    return (
        <div className="w-full text-black flex lg:max-w-[820px] h-40" key={id}>
            <div className="bg-white w-[17rem] text-center flex flex-col justify-center items-center border-e-red-500 border-8 border-solid border-y-transparent border-s-transparent">
                <p className="text-[3rem] sm:text-[4rem] font-bold italic">{new Date(date).getDate()}</p>
                <p className="text-[1.2rem] sm:text-[1.6rem]">{new Date(date).toLocaleDateString('en-US', {month: 'long'})}</p>
            </div>

            <div className="bg-black text-white w-full px-4 py-3 flex flex-col gap-1">
                <p className="text-sm md:text-2xl line-clamp-2">{title}</p>
                <p className="text-[12px] text-slate-400">{dateConvert(date)}</p>
                <p className="line-clamp-2 text-sm">{body}</p>
            </div>
        </div>
    )
}