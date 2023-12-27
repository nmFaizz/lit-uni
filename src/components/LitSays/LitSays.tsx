
export default function LitSays() {
    const locationData = [
        {
            id: 1,
            image: '/lit-student-2.jpg',
            name: 'Arifiana Lougue',
            major: 'Computer Science',
            says: 'LIT-UNIVERSITY provided me with a comprehensive Computer Science program. The professors were knowledgeable, and the resources available for research and projects were top-notch. I enjoyed the practical approach to learning, which prepared me well for my career.'
        },
        {
            id: 2,
            image: '/lit-student-1.jpg',
            name: 'Louise Chong',
            major: 'Machine Engineering',
            says: 'Studying Machine Engineering at LIT-UNIVERSITY was a rewarding experience. The curriculum was challenging, but the support from faculty and peers made it manageable. The hands-on projects allowed me to apply theoretical knowledge in real-world scenarios, which was invaluable.'
        },
        {
            id: 3,
            image: '/lit-student-3.jpg',
            name: 'Hanashiro Anzu',
            major: 'Civil Engineering',
            says: 'LIT-UNIVERSITY offered a great Civil Engineering program. The faculty members were experienced professionals who provided valuable insights. The practical training and exposure to industry standards gave me a solid foundation for my career in Civil Engineering.' 
        }
    ]


    return (
        <>
            <div className="w-full h-8 bg-white p-8 flex items-center py-12">
                <p className="text-black text-xl md:text-3xl italic w-[420px]">WHAT THEY SAID ?</p>
                <div className="h-[2px] bg-black w-full"></div>
            </div>
            <div className="flex justify-center py-12">
                <div className="flex justify-center md:flex-row flex-col gap-32 md:gap-12 lg:gap-32 max-w-[780px] lg:max-w-[1060px] items-center">
                    {locationData.map(data => 
                        <div className="sm:w-[240px] w-[260px] h-[550px]" key={data.id}>

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