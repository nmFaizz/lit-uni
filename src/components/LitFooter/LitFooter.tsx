
export default function LitFooter() {
    return (
        <div className="bg-black px-12 py-4">
            <div className="flex gap-4 items-center">
            <img src="/lit-logo-white.png" alt="lit-logo" className="w-[120px]" />
            <div className="w-32">
                <p className='text-[16px] border-solid border-s-2 ps-5'>Lumii Institute Of Technology</p>
            </div>
            </div>
    
            <div>
            <div className="max-w-[1000px] text-slate-300 mt-12">
                <p className="text-sm">Privacy Policy | DISCLAIMER</p>
                <p className="mt-4 text-sm">PRIVACY POLICY DISCLAIMER </p>
                <p>Lumii Institute Of Technology is registered with the Committee for Private Education which is part of SkillsFuture.</p>
                <p>Registration No.: 199202950W Validity: 25/03/2023 - 24/03/2027</p>
                <p>Lumii Institute Of Technology is registered with the Commissioner of Charities as an Institution of a Public Character (IPC).</p>
                <p className="text-sm mt-4">©2023 Lumii Institute Of Technology. Copyrights. All rights reserved.</p>
    
                <div className="flex mt-12">
                <a href="#" className="pr-4 hover:text-red-600">EMAIL</a>
                <a href="#" className="border-slate-300 border-x-2 px-4 hover:text-red-600">FAX</a>
                <a href="#" className="pl-4 hover:text-red-600">LINKEDIN</a>
                </div>
            </div>
            </div>
        </div>
    )
}