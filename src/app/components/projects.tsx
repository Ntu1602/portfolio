export default function Projects(){
    return <div className="w-full mt-5">
        <div className="lg:min-w-[1040px] lg:max-w-[1440px] mx-auto px-4">
            <h1 className="text-center text-2xl text-white pt-5 pb-3">Projects</h1>
            <div className="grid grid-cols-2 gap-1
                            md:grid-cols-3">
                <div className="p-4 border border-purple-600 rounded-2xl">
                    <img className="w-full max-h-30 object-cover rounded-2xl shadow-[0_10px_20px_#6a0dad]"  src="/portfolio/liana.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-bold pt-2">liana.vn</h2>
                        <p className="text-white opacity-80 md:text-[16px]">Trang bán hàng thời trang nữ</p>
                        <div className="flex">
                            <img className="w-[10%]" alt="Wordpress" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/330px-WordPress_blue_logo.svg.png" />
                        </div>
                        <a className="block rounded-xl text-center py-1 border border-purple-600 text-white " href="liana.vn">View</a>
                    </div>
                </div>
                <div className="p-4 border border-purple-600 rounded-2xl">
                    <img className="w-full max-h-30 object-cover rounded-2xl shadow-[0_10px_20px_#6a0dad]"  src="/portfolio/lucnguyen.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-bold pt-2">lucnguyen.liana.vn</h2>
                        <p className="text-white opacity-80 md:text-[16px]">Trang giới thiệu công ty xây dựng</p>
                        <div className="flex">
                            <img className="w-[10%]" alt="Wordpress" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/330px-WordPress_blue_logo.svg.png" />
                        </div>
                        <a className="block rounded-xl text-center py-1 border border-purple-600 text-white " href="lucnguyen.liana.vn">View</a>
                    </div>
                </div>
                <div className="p-4 border border-purple-600 rounded-2xl">
                    <img className="w-full max-h-30 object-cover rounded-2xl shadow-[0_10px_20px_#6a0dad]"  src="/portfolio/myportfolio.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-bold pt-2">portfolio.liana.vn</h2>
                        <p className="text-white opacity-80 md:text-[16px]">My Portfolio</p>
                        <div className="flex">
                            <img className="w-[10%]" alt="Wordpress" src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" />
                            <img className="w-[10%]" alt="Wordpress" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                        </div>
                        <a className="block rounded-xl text-center py-1 border border-purple-600 text-white " href="#">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}