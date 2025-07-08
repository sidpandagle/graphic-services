import Image from "next/image";

export default function FeaturedWork() {
    return (
        <div className="p-8 text-center container mx-auto" id="featured-work">
            <div className="mb-4 lg:mb-8 text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Featured Work</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">Explore a collection of graphic designs that transform concepts into captivating visuals, showcasing creativity, originality, and the power of design to tell stories.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...(new Array(2))].map((x, index) => (
                   <div className="h-40 w-full overflow-hidden rounded-lg">
                        {/* <img className="h-40 w-full object-cover duration-200 hover:scale-110" src={`/work-images/${Math.ceil(Math.random() * 4)}.png`} alt="" /> */}
                        <img className="h-40 w-full object-cover duration-200 hover:scale-110" src={`/work-images/4.png`} alt="" />
                    </div> 
                ))}
            </div>


            {/* <a href="/work">
                <button className="btn btn-neutral mt-6 w-40">
                    See More
                </button>
            </a> */}
        </div>

    );
}
