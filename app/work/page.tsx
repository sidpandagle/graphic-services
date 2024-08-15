import NavBar from "@/shared/components/NavBar";

export default function Work() {
    const data = [
        {
            imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
        {
            imageLink:
                "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
            imageLink:
                "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
    ];

    return (
        <div className="p-8  text-center" id="featured-work">
            <div className="mb-8 lg:mb-16 text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Work</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">Explore a collection of graphic designs that transform concepts into captivating visuals, showcasing creativity, originality, and the power of design to tell stories.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[...data, ...data, ...data, ...data, ...data].map(({ imageLink }, index) => (
                    <div key={index}>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
