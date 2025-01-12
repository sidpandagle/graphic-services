import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900 md:min-h-[65vh] min-h-[45vh] flex items-end relative justify-center overflow-hidden">
            <img src={"https://ik.imagekit.io/178765/GraphicServices/designer.jpg"} className="hidden md:block absolute -top-20" alt="designerimage" />
            <img src={"https://ik.imagekit.io/178765/GraphicServices/designer-mobile.jpg"} className="absolute md:hidden -top-8" alt="designerimage" />
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 z-10">
                {/* <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1> */}
                <h1 className="mb-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl ">Transforming Ideas into Visual Masterpieces</h1>
                <p className="mb-8 sm:text-lg font-normal lg:text-xl italic sm:px-16 xl:px-48 400"><span className="bg-white">Where Design Meets Destiny: Crafting Your Visual Masterpiece.</span></p>
            </div>
        </section>
        
    );
}
