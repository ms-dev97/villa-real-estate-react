import SectionTitle from "../../../components/SectionTitle";
import contactBg from '../../../assets/images/contact-bg.jpg';
import emailIcon from '../../../assets/images/email-icon.png';
import phoneIcon from '../../../assets/images/phone-icon.png';

function ContactUs() {
    return (
        <>
            <div className="pt-24 md:pb-72 pb-60" style={{backgroundImage: `url(${contactBg})`}}>
                <h2 className="text-center text-white xl:w-1/4 lg:w-1/2 mx-auto">
                    <SectionTitle label="Contact us" title="Get In Touch With Our Agents" />
                </h2>
            </div>

            <div className="container mx-auto grid grid-cols-12 gap-8 mt-[-150px] px-2.5 mb-20">
                <div className="lg:col-span-8 col-span-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" className="rounded-xl shadow-lg" allowFullScreen={true}></iframe>

                    <div className="grid grid-cols-12 gap-6 mt-6">
                        <div className="shadow-lg p-6 flex items-start gap-10 rounded-xl md:col-span-6 col-span-full">
                            <img src={phoneIcon} alt="" />
                            <div>
                                <p className="font-bold text-lg">010-020-0340</p>
                                <span className="text-neutral-400">Phone Number</span>
                            </div>
                        </div>

                        <div className="shadow-lg p-6 flex items-start gap-6 rounded-xl md:col-span-6 col-span-full">
                            <img src={emailIcon} alt="" />
                            <div>
                                <p className="font-bold text-lg">info@villa.co</p>
                                <span className="text-neutral-400">Business Email</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 col-span-full">
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