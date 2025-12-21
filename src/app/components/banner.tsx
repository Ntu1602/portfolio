import { FileDown, Send } from 'lucide-react'
export default function Banner(){
    return <div className='lg:min-w-[1040px] lg:max-w-[1440px] mx-auto'>
        <div className='flex items-centers p-2'>
            <div className='w-[40%]'>
                <img className='w-full drop-shadow-[0_0_100px_#6a0dad]' src="/portfolio/Chandung.png" alt="" />
            </div>
            <div className='w-[60%] flex flex-col justify-center'>
                <p className='w-full text-white'>Hiiii! Mình là <span className='text-[#561F8F] text-2xl'>Nguyễn Thái Tú</span></p>
                <p className='w-full break-normal text-white'>Một lập trình viên <span className='text-[#561F8F] text-3xl inline'>website</span></p>
                {/* <p className='w-full text-white'>A website developer who</p> */}
            </div>
        </div>
    </div>
}