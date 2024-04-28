import { useEffect, useState } from "react";
import Filterizr from 'filterizr'
import PageBanner from "../components/PageBanner";
import propertyImg1 from '../assets/images/property-01.jpg';
import propertyImg2 from '../assets/images/property-02.jpg';
import propertyImg3 from '../assets/images/property-03.jpg';
import propertyImg4 from '../assets/images/property-04.jpg';
import propertyImg5 from '../assets/images/property-05.jpg';
import propertyImg6 from '../assets/images/property-06.jpg';

const propertiesLIst = [
    {
        id: 1,
        img:propertyImg1,
        category:"villa house",
        price:"2.264.000",
        title:"18 Old Street Miami, OR 97219",
        bedrooms:"8",
        bathrooms:"8",
        area:"545m2",
        floor:"3",
        parking:"6",
        parkingType:"spots",
    },
    {
        id: 2,
        img:propertyImg2,
        category:"villa house",
        price:"1.460.000",
        title:"26 Mid Street Portland, OR 38540",
        bedrooms:"5",
        bathrooms:"4",
        area:"225m2",
        floor:"3",
        parking:"10",
        parkingType:"spots",
    },
    {
        id: 3,
        img:propertyImg3,
        category:"penthouse",
        price:"450.000",
        title:"22 Hope Street Portland, OR 16540",
        bedrooms:"3",
        bathrooms:"2",
        area:"165m2",
        floor:"26th",
        parking:"3",
        parkingType:"cars",
    },
    {
        id: 4,
        img:propertyImg4,
        category:"appartment",
        price:"584.500",
        title:"12 Hope Street Portland, OR 12650",
        bedrooms:"4",
        bathrooms:"3",
        area:"125m2",
        floor:"25th",
        parking:"2",
        parkingType:"cars",
    },
    {
        id: 5,
        img:propertyImg5,
        category:"appartment",
        price:"584.500",
        title:"26 Old Street Miami, OR 12870",
        bedrooms:"4",
        bathrooms:"3",
        area:"125m2",
        floor:"25th",
        parking:"2",
        parkingType:"cars",
    },
    {
        id: 5,
        img:propertyImg6,
        category:"appartment",
        price:"3.145.000",
        title:"34 New Street Miami, OR 24650",
        bedrooms:"4",
        bathrooms:"3",
        area:"125m2",
        floor:"25th",
        parking:"2",
        parkingType:"cars",
    }
]

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

// Property card component
function PropertyItem({img, category, price, title, bedrooms, bathrooms, area, floor, parking, parkingType}: PropertyItemProps) {
    return (
        <div className="bg-neutral-100 p-8 rounded-md filter-item lg:w-1/3 md:w-2/4" data-category={category.toLocaleLowerCase()}>
            <img src={img} alt="" className="w-full rounded-xl" />

            <div className="flex flex-wrap justify-between items-center my-4">
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

// Filter items
const tabs = ['All', 'Appartment', 'Villa House', 'Penthouse'];

function Properties() {
    useEffect(() => {
        new Filterizr('.filter-container', {
            gridItemsSelector: '.filter-item',
            gutterPixels: 20,
            layout: 'sameWidth'
        })
    }, []);

    const [activeTab, setActiveTab] = useState('all');

    return (
        <>
            <PageBanner path="Home / Properties" title="Properties" />

            <div className="container py-20 px-2.5 mx-auto">
                <div className="flex flex-wrap gap-5 justify-center mb-10">
                    {tabs.map(item => (
                        <div className={`${activeTab == item.toLocaleLowerCase() ? 'bg-primary' : 'bg-black'} hover:bg-primary py-3 px-6 text-white transition-colors rounded-md font-medium cursor-pointer`}
                                data-filter={item.toLocaleLowerCase()}
                                onClick={() => setActiveTab(item.toLocaleLowerCase())}
                                key={item.toLocaleLowerCase()}>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="filter-container">
                    {
                        propertiesLIst.map(item => (
                            <PropertyItem
                                key={item.id}
                                img={item.img}
                                category={item.category}
                                price={item.price}
                                title={item.title}
                                bedrooms={item.bedrooms}
                                bathrooms={item.bathrooms}
                                area={item.area}
                                floor={item.floor}
                                parking={item.parking}
                                parkingType={item.parkingType}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Properties;
