import PageBanner from "../components/PageBanner";
import infoIcon1 from '../assets/images/info-icon-01.png';
import infoIcon2 from '../assets/images/info-icon-02.png';
import infoIcon3 from '../assets/images/info-icon-03.png';
import infoIcon4 from '../assets/images/info-icon-04.png';
import propertyImg from '../assets/images/single-property.jpg';

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

function PropertyDetails() {
    return (
        <>
            <PageBanner path="Home / Single Property" title="Single property" />

            <div className="container mx-auto py-40 px-2.5 lg:grid grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-8 col-span-full">
                    <img className="w-full" src={propertyImg} alt="" />

                    <span className="inline-block py-1 px-3 my-6 test-sm bg-rose-100 rounded-md">Appartment</span>

                    <h2 className="text-2xl font-bold">
                        24 New Street Miami, OR 24560
                    </h2>

                    <hr className="my-10" />

                    <p className="leading-loose text-slate-600">
                        Lorem ipsum dolor sit <b>amet, consectetur</b> adipisicing elit. Delectus iste, officiis consectetur, expedita, aut harum quis quibusdam enim possimus officia veritatis impedit accusantium error est totam vel eveniet Delectus iste, officiis consectetur, expedita, maiores nulla?
                    </p>

                    <p className="leading-loose text-slate-600 mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id quo, laboriosam recusandae molestiae, omnis unde porro iste incidunt consequuntur qui, cumque perferendis rerum dolore. Sed ratione officia eligendi optio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente recusandae eligendi illo, incidunt, magni ipsa iure harum, mollitia commodi aut molestiae neque officia quos vel facilis iusto voluptates eveniet. Cum!
                    </p>
                </div>

                <div className="lg:col-span-4 col-span-full shadow-lg rounded-md px-6">
                    <InfoItem
                        img={infoIcon1}
                        title="450 m2"
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
        </>
    );
}

export default PropertyDetails;