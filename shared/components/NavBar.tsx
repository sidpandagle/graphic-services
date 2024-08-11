import Image from "next/image";

export default function NavBar() {
    return (
        <div id="navbar" className="border-b">
            <div className="container mx-auto py-8 flex gap-8 justify-between">
                <div>TGS</div>
                <div className="flex gap-8">
                    <a href="#services" className="cursor-pointer">Services</a>
                    <a href="#featured-work" className="cursor-pointer">Featured Work</a>
                    <a href="#about-us" className="cursor-pointer">About Us</a>
                </div>
                <a href="#contact-us" className="cursor-pointer">Contact Us</a>
            </div>
        </div>
    );
}
