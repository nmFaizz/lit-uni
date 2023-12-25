import NewsItem from "./NewsItem"

export default function LitNews(): JSX.Element {

    let news = [
        {
            id: 1,
            title: 'Top 1 rank in category of computer science program.', 
            date: '2023-12-12',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, omnis laudantium deserunt praesentium quasi nisi ipsam amet eligendi quis numquam?'
        },
        {
            id: 2,
            title: 'Invented new technology to prevent malliscious things.', 
            date: '2023-12-01',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas est consectetur tenetur officia blanditiis sapiente molestias minus pariatur laborum dignissimos?'
        },
        {
            id: 3,
            title: 'LIT for Green World ECOMARATHON2023.', 
            date: '2023-11-20',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas est consectetur tenetur officia blanditiis sapiente molestias minus pariatur laborum dignissimos?'
        },
    ]

    return (
        <div className="px-5 w-full mb-9">
            <p className="text-[4rem] italic">NEWS</p>
            <div className="h-[2px] w-full bg-white"></div>
            <div className="h-8 w-24 bg-white"></div>

            <div className="flex mt-12 h-full flex-col lg:flex-row gap-4">
                <div className="flex w-full flex-col gap-2 flex-1">
                    {news.map(item => 
                        <NewsItem key={item.id} {...item} />
                    )}
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