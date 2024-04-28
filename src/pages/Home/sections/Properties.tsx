import SectionTitle from "../../../components/SectionTitle";
import propertyImg1 from '../../../assets/images/property-01.jpg';
import propertyImg2 from '../../../assets/images/property-02.jpg';
import propertyImg3 from '../../../assets/images/property-03.jpg';
import propertyImg4 from '../../../assets/images/property-04.jpg';
import propertyImg5 from '../../../assets/images/property-05.jpg';
import propertyImg6 from '../../../assets/images/property-06.jpg';

interface PropertyItemProps {
    img: string,
    category: string,
    price: string,
    title: string,
    bedrooms: string,
    bathrooms: string,
    area: string,
    floor: string,
    parking: string,
    parkingType: string
}

function PropertyItem({img, category, price, title, bedrooms, bathrooms, area, floor, parking, parkingType}: PropertyItemProps) {
    return (
        <div className="bg-neutral-100 p-8 rounded-md">
            <img src={img} alt="" className="w-full rounded-xl" />

            <div className="flex justify-between items-center my-4">
                <span className="py-1 px-3 test-sm bg-rose-100 rounded-md">{category}</span>
                <span className="font-bold text-primary text-xl">${price}</span>
            </div>

            <h4 className="font-semibold text-lg my-4">{title}</h4>

            <div className="flex flex-wrap gap-5">
                <span>Bedrooms: <b>{bedrooms}</b></span>
                <span>Bathrooms: <b>{bathrooms}</b></span>
                <span>Area: <b>{area}</b></span>
                <span>Floor: <b>{floor}</b></span>
                <span>Parking: <b>{parking} {parkingType}</b></span>
            </div>
            
            <hr className="my-6" />

            <div className="flex justify-center">
                <a href="#" className="inline-block text-white bg-black hover:bg-primary transition-colors py-2 px-6 rounded-full">
                    Schedule a visit
                </a>
            </div>
        </div>
    );
}

function Properties() {
    return (
        <div className="py-20 px-2.5">
            <h2 className="text-center xl:w-1/4 lg:w-1/2 mx-auto mb-10">
                <SectionTitle label="Properties" title="We Provide The Best Property You Like" />
            </h2>

            <div className="container mx-auto grid grid-cols-12 gap-8">
                <div className="lg:col-span-4 md:col-span-6 col-span-full">
                    <PropertyItem
                        img={propertyImg1}
                        category="Luxury Villa"
                        price="2.264.000"
                        title="18 New Street Miami, OR 97219"
                        bedrooms="8"
                        bathrooms="8"
                        area="545m2"
                        floor="3"
                        parking="6"
                        parkingType="spots"
                    />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-full">
                    <PropertyItem
                        img={propertyImg2}
                        category="Luxury Villa"
                        price="1.180.000"
                        title="54 Mid Street Florida, OR 27001"
                        bedrooms="6"
                        bathrooms="5"
                        area="450m2"
                        floor="3"
                        parking="8"
                        parkingType="spots"
                    />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-full">
                    <PropertyItem
                        img={propertyImg3}
                        category="Luxury Villa"
                        price="1.460.000"
                        title="26 Old Street Miami, OR 38540"
                        bedrooms="5"
                        bathrooms="4"
                        area="225m2"
                        floor="3"
                        parking="10"
                        parkingType="spots"
                    />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-full">
                    <PropertyItem
                        img={propertyImg4}
                        category="Apartment"
                        price="584.500"
                        title="12 New Street Miami, OR 12650"
                        bedrooms="4"
                        bathrooms="3"
                        area="125m2"
                        floor="25th"
                        parking="2"
                        parkingType="cars"
                    />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-full">
                    <PropertyItem
                        img={propertyImg5}
                        category="Apartment"
                        price="925.600"
                        title="34 Beach Street Miami, OR 42680"
                        bedrooms="4"
                        bathrooms="4"
                        area="180m2"
                        floor="38th"
                        parking="2"
                        parkingType="cars"
                    />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-full">
                    <PropertyItem
                        img={propertyImg6}
                        category="Apartment"
                        price="450.000"
                        title="22 New Street Portland, OR 16540"
                        bedrooms="3"
                        bathrooms="2"
                        area="165m2"
                        floor="26th"
                        parking="3"
                        parkingType="cars"
                    />
                </div>
            </div>
        </div>
    )
}

export default Properties;