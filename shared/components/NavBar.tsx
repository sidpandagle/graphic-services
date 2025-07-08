import Image from "next/image";

export default function NavBar() {
    return (
        <div className="border-b">
            <div id="navbar" className="container mx-auto p-4 md:p-6 flex gap-8 justify-between items-end">
                <div className="flex">
                    {/* <p>PixelForgeStudio</p> */}
                    <img  src="/Pixelforgestudio-logo.svg" alt="logo" className="h-10 w-22" />
                </div>
                <div className="hidden md:flex gap-8 text-sm">
                    <a href="/#services" className="cursor-pointer">Services</a>
                    <a href="/#featured-work" className="cursor-pointer">Featured Work</a>
                    <a href="/#about-us" className="cursor-pointer">About Us</a>
                    {/* <a href="/#pricing" className="cursor-pointer">Pricing</a> */}
                    <a href="/#contact-us" className="cursor-pointer">Contact Us</a>
                </div>
                {/* <a href="/#contact-us" className="hidden md:flex cursor-pointer  text-sm">Contact Us</a> */}
                <div className="dropdown dropdown-end md:hidden z-20">
                    <div tabIndex={0} role="button" className="btn m-1">///</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ">
                        <li><a href="/#services" className="cursor-pointer">Services</a></li>
                        <li><a href="/#featured-work" className="cursor-pointer">Featured Work</a></li>
                        <li><a href="/#about-us" className="cursor-pointer">About Us</a></li>
                        <li><a href="/#contact-us" className="md:flex cursor-pointer">Contact Us</a></li>
                        {/* <li><a href="/#pricing" className="md:flex cursor-pointer">Pricing</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
