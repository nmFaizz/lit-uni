
export default function LitNews(): JSX.Element {
    return (
        <div className="px-5 w-full mb-9">
            <p className="text-[4rem] italic">NEWS</p>
            <div className="h-[2px] w-full bg-white"></div>
            <div className="h-8 w-24 bg-white"></div>

            <div className="flex mt-12 h-full flex-col lg:flex-row gap-4">
                <div className="flex w-full flex-col gap-2 flex-1">
                    <div className="w-full text-black flex lg:max-w-[820px] h-40">
                        <div className="bg-white w-[17rem] text-center flex flex-col justify-center items-center border-e-red-500 border-8 border-solid border-y-transparent border-s-transparent">
                            <p className="text-[3rem] sm:text-[4rem] font-bold italic">12</p>
                            <p className="text-[1.2rem] sm:text-[1.6rem]">December</p>
                        </div>

                        <div className="bg-black text-white w-full px-4 py-3 flex flex-col gap-1">
                            <p className="text-sm md:text-2xl line-clamp-2">Top 1 rank in category of computer science program.</p>
                            <p className="text-[12px] text-slate-400">Wednesday, 12 Desember 2026</p>
                            <p className="line-clamp-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, omnis laudantium deserunt praesentium quasi nisi ipsam amet eligendi quis numquam?</p>
                        </div>
                    </div>

                    <div className="w-full text-black flex lg:max-w-[820px] h-40">
                        <div className="bg-white w-[17rem] text-center flex flex-col justify-center items-center border-e-red-500 border-8 border-solid border-y-transparent border-s-transparent">
                            <p className="text-[3rem] sm:text-[4rem] font-bold italic">01</p>
                            <p className="text-[1.2rem] sm:text-[1.6rem]">December</p>
                        </div>

                        <div className="bg-black text-white w-full px-4 py-3 flex flex-col gap-1">
                            <p className="textsm md:text-2xl line-clamp-2">Invented new technology to prevent malliscious things.</p>
                            <p className="text-[12px] text-slate-400">Friday, 01 Desember 2026</p>
                            <p className="line-clamp-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas est consectetur tenetur officia blanditiis sapiente molestias minus pariatur laborum dignissimos?</p>
                        </div>
                    </div>

                    <div className="w-full text-black flex lg:max-w-[820px] h-40">
                        <div className="bg-white w-[17rem] text-center flex flex-col justify-center items-center border-e-red-500 border-8 border-solid border-y-transparent border-s-transparent">
                            <p className="text-[3rem] sm:text-[4rem] font-bold italic">20</p>
                            <p className="text-[1.2rem] sm:text-[1.6rem]">November</p>
                        </div>

                        <div className="bg-black text-white w-full px-4 py-3 flex flex-col gap-1">
                            <p className="text-sm md:text-2xl line-clamp-2">LIT for Green World ECOMARATHON2023.</p>
                            <p className="text-[12px] text-slate-400">Monday, 20 November 2026</p>
                            <p className="line-clamp-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas est consectetur tenetur officia blanditiis sapiente molestias minus pariatur laborum dignissimos?</p>
                        </div>
                    </div>

                    <button className="w-[150px] px-3 py-2 border-white border-2 hover:bg-slate-200 hover:text-black">View More</button>
                </div>

                <div className="h-full w-full max-w-[1000px] flex-1 bg-[url('/ARTIFICIAL-INTELLIGENCE.jpg')] bg-cover bg-center">
                    <div className="bg-gradient-to-t from-stone-950 h-[100%] p-4 md:p-12 w-full">
                        <div className="mt-[19rem] px-4 w-full">
                            <div className="w-[200px] border-2 rounded-3xl flex items-center justify-center mb-2">
                                <p>November 17, 2023</p>
                            </div>
                            <p className="font-bold text-[24px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, sed.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo sint voluptatem.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}