import Image from "next/image";

export default function NavBar() {
    return (
        <div className=" border-b">
            <div className="container mx-auto py-8 flex gap-8 justify-between">
                <div>TGS</div>
                <div className="flex gap-8">
                    <div>Services</div>
                    <div>Featured Work</div>
                    <div>About Us</div>
                </div>
                <div>Contact Us</div>
            </div>
        </div>
    );
}
