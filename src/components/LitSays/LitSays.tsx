
export default function LitSays() {
    const locationData = [
        {
            id: 1,
            image: '/lit-student-2.jpg',
            name: 'Arifiana Lougue',
            major: 'Computer Science',
            says: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium eum dolore fuga optio aliquam, iure ut non veniam. Nobis, autem.'
        },
        {
            id: 2,
            image: '/lit-student-1.jpg',
            name: 'Louise Chong',
            major: 'Machine Engineering',
            says: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium eum dolore fuga optio aliquam, iure ut non veniam. Nobis, autem.'
        },
        {
            id: 3,
            image: '/lit-student-3.jpg',
            name: 'Hanashiro Anzu',
            major: 'Civil Engineering',
            says: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium eum dolore fuga optio aliquam, iure ut non veniam. Nobis, autem.' 
        }
    ]


    return (
        <>
            <div className="w-full h-8 bg-white p-8 flex items-center py-12">
                <p className="text-black text-xl md:text-3xl italic w-[420px]">WHAT THEY SAID ?</p>
                <div className="h-[2px] bg-black w-full"></div>
            </div>
            <div className="flex justify-center py-12">
                <div className="min-h-[560px] flex justify-center md:flex-row flex-col gap-32 md:gap-12 lg:gap-32 max-w-[780px] lg:max-w-[1060px] items-center">
                    {locationData.map(data => 
                        <div className="sm:w-[240px] w-[260px]" key={data.id}>

                            <div className="flex justify-center">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                    <img 
                                        src={data.image}
                                        alt="lit-says" 
                                        style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                                        decoding="async"
                                    />
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-2xl bg-red-500 w-[80%]">{data.name}</p>
                                <p className="text-sm mb-12 bg-white text-black w-[70%]">{data.major}</p>
                                <p>{data.says}</p>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        </>
    )
}