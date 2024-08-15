import Image from "next/image";

export default function CTA() {
    return (
        <section className="bg-white" id="contact-us">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                <div className="flex justify-center">
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl md:w-3/4">Ready to transform ideas into visuals? Reach out and let’s start creating together</p>
                </div>
                <form action="#" className="space-y-8">
                    <div>
                        <label   className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label   className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label   className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="React out to us..."></textarea>
                    </div>
                    <button className="btn btn-neutral">Send Message</button>
                </form>
            </div>
        </section>
    );
}
