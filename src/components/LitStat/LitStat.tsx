import { InView } from "react-intersection-observer"
import CountUp from "react-countup"

export default function LitStat() {
    const details = [
        {
            id: 1,
            num: 123872,
            text: 'STUDENTS'
        },
        {
            id: 2,
            num: 62,
            text: 'STUDY PROGRAMS'
        },
        {
            id: 3,
            num: 17,
            text: 'FACULTIES'
        }
    ]

    return (
        <InView>
            {({ inView, ref }) => (
            <div className='flex gap-2 w-full md:justify-center flex-col md:flex-row' ref={ref}>
                {details.map(detail => 
                <div className='bg-red-700 text-center h-[220px] p-4 flex-1 flex flex-col justify-center items-center' key={detail.id}>
                    <p className="text-[22px] sm:text-[35px]">
                    {
                        inView &&
                        <CountUp start={0} end={detail.num} duration={3} />
                    }
                    </p>
                    <p className="text-[22px] sm:text-[35px]">{detail.text}</p>
                </div> 
                )}
            </div>
            )}
        </InView>
    )
}