import PageBanner from "../components/PageBanner";
import emailIcon from '../assets/images/email-icon.png';
import phoneIcon from '../assets/images/phone-icon.png';
import SectionTitle from "../components/SectionTitle";

function ContactUs() {
    return (
        <>
            <PageBanner path="Home / Contact us" title="Contact us" />

            <div className="container mx-auto grid grid-cols-12 gap-8 py-20 px-2.5">
                <div className="lg:col-span-6 col-span-full">
                    <h2 className="lg:w-2/3 sm:w-1/2">
                        <SectionTitle label="Contact us" title="Get in toutch with our agents" />
                    </h2>

                    <p className="my-6 leading-loose text-slate-600">
                        When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
                    </p>

                    <div className="grid grid-cols-12 gap-6 mt-6">
                        <div className="shadow-lg p-6 flex items-start gap-10 rounded-xl xl:col-span-6 col-span-full">
                            <img src={phoneIcon} alt="" />
                            <div>
                                <p className="font-bold text-lg">010-020-0340</p>
                                <span className="text-neutral-400">Phone Number</span>
                            </div>
                        </div>

                        <div className="shadow-lg p-6 flex items-start gap-6 rounded-xl xl:col-span-6 col-span-full">
                            <img src={emailIcon} alt="" />
                            <div>
                                <p className="font-bold text-lg">info@villa.co</p>
                                <span className="text-neutral-400">Business Email</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 col-span-full">
                    <form className="shadow-lg p-6 rounded-xl bg-white">
                        <div className="mb-6">
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input type="text" name="name" id="name" placeholder="Your name..." className="rounded-full block bg-neutral-100 w-full px-4 py-3 mt-3" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="text-sm">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Your email..." className="rounded-full block bg-neutral-100 w-full px-4 py-3 mt-3" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="text-sm">Subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Subject..." className="rounded-full block bg-neutral-100 w-full px-4 py-3 mt-3" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea name="message" id="message" cols={30} rows={5} placeholder="Your message" className="rounded-xl block bg-neutral-100 w-full px-4 py-3 mt-3"></textarea>
                        </div>

                        <button type="submit" className="inline-block text-white bg-black hover:bg-primary transition-colors py-2 px-6 rounded-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactUs;