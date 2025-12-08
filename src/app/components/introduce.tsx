export default function Introduce(){
    return <div className="relative w-full">
        <div className="lg:min-w-[1040px] lg:max-w-[1440px] mx-auto pt-10 px-4 relative">
            <div>
                <h1 className="text-white text-3xl">I'm a Website Developer.</h1>
                <h3 className="text-white">Currently. I'm a <span className="inline text-[#561F8F]">Freelancer</span></h3>
            </div>
            <p className="text-white pt-5">
                If you need a modern and responsive website design, I can help create a clean and professional layout tailored to your goals. Whether it's a portfolio or business site, I focus on good UI/UX and smooth user experience.
            </p>
        </div>
            <div className="absolute rounded-full inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,#6a0dad40_0%,transparent_70%)]"></div>
    </div>
}