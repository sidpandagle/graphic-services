import Image from "next/image";

export default function NavBar() {
    return (
        <div className="border-b">
            <div id="navbar" className="container mx-auto p-4 md:p-8 flex gap-8 justify-between items-center">
                <div>DesignForge</div>
                <div className="hidden md:flex gap-8">
                    <a href="/#services" className="cursor-pointer">Services</a>
                    <a href="/#featured-work" className="cursor-pointer">Featured Work</a>
                    <a href="/#about-us" className="cursor-pointer">About Us</a>
                </div>
                <a href="/#contact-us" className="hidden md:flex cursor-pointer">Contact Us</a>
                <div className="dropdown dropdown-end md:hidden z-20">
                    <div tabIndex={0} role="button" className="btn m-1">///</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="/#services" className="cursor-pointer">Services</a></li>
                        <li><a href="/#featured-work" className="cursor-pointer">Featured Work</a></li>
                        <li><a href="/#about-us" className="cursor-pointer">About Us</a></li>
                        <li><a href="/#contact-us" className="md:flex cursor-pointer">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
