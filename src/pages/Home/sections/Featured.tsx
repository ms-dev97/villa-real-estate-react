import featuredImg from '../../../assets/images/featured.jpg';
import infoIcon1 from '../../../assets/images/info-icon-01.png';
import infoIcon2 from '../../../assets/images/info-icon-02.png';
import infoIcon3 from '../../../assets/images/info-icon-03.png';
import infoIcon4 from '../../../assets/images/info-icon-04.png';
import SectionTitle from '../../../components/SectionTitle';

interface InfoItemProps {
    img: string,
    title: string,
    details: string
}

function InfoItem({img, title, details}: InfoItemProps) {
    return (
        <div className="flex gap-5 [&:not(:last-child)]:border-b-2 border-neutral-100 py-6">
            <img src={img} alt="" />
            <div>
                <div className="font-medium text-xl">{title}</div>
                <div className="text-neutral-400">{details}</div>
            </div>
        </div>
    )
}

function Featured() {
    return (
        <div className="container mx-auto py-40 px-2.5 grid grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 col-span-full order-1">
                <img className="w-full" src={featuredImg} alt="" />
            </div>

            <div className="lg:col-span-5 col-span-full lg:order-1 order-none">
                <h2 className="lg:w-2/3">
                    <SectionTitle label="featured" title="Best Appartment & See View" />
                </h2>

                <div className="bg-neutral-100 rounded-sm mt-8">
                    <div className="text-primary p-3 border-b-2 border-neutral-200">
                        Best useful links
                    </div>
                    <div className="p-3">
                        Get <b>the best villa</b> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3 col-span-full order-1 shadow-lg rounded-md px-6">
                <InfoItem
                    img={infoIcon1}
                    title="250 m2"
                    details="Total Flat Space"
                />

                <InfoItem
                    img={infoIcon2}
                    title="Contract"
                    details="Contract Ready"
                />

                <InfoItem
                    img={infoIcon3}
                    title="Payment"
                    details="Payment Process"
                />

                <InfoItem
                    img={infoIcon4}
                    title="Safety"
                    details="24/7 Under Control"
                />
            </div>
        </div>
    )
}

export default Featured;