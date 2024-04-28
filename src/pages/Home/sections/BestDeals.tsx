import SectionTitle from "../../../components/SectionTitle";
import dealImg1 from '../../../assets/images/deal-01.jpg';
import dealImg2 from '../../../assets/images/deal-02.jpg';
import dealImg3 from '../../../assets/images/deal-03.jpg';
import { useState } from "react";
import { motion } from "framer-motion";

interface TabContentProps {
    totalSpace: string, 
    floorNumber: string, 
    roomsNumber: string, 
    parkingAvailable: string, 
    paymentProcess: string, 
    img: string
}

function InfoItem({title, details}: {title: string, details: string}) {
    return (
        <div className="flex justify-between [&:not(:last-child)]:border-b-2 border-neutral-100 py-6">
            <div className="text-neutral-400">{title}</div>
            <div className="font-medium text-xl">{details}</div>
        </div>
    )
}

function TabContent({totalSpace, floorNumber, roomsNumber, parkingAvailable, paymentProcess, img}: TabContentProps) {
    return (
        <div className="lg:grid grid-cols-12 gap-8 items-start">
            <div className="col-span-3 px-6 bg-white shadow-lg rounded-md">
                <InfoItem title="Total Flat Space" details={totalSpace} />
                <InfoItem title="Floor number" details={floorNumber} />
                <InfoItem title="Number of rooms" details={roomsNumber} />
                <InfoItem title="Parking Available" details={parkingAvailable} />
                <InfoItem title="Payment Process" details={paymentProcess} />
            </div>

            <div className="col-span-6 my-10 lg:my-0">
                <img src={img} alt="" className="w-full" />
            </div>

            <div className="col-span-3">
                <div className="font-semibold text-lg mb-6">Extra Info About Property</div>
                <div className="text-sm leading-loose text-slate-600">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea tenetur quas eos officia tempora laboriosam iure, natus dicta molestiae quos quae nostrum iste, non ratione praesentium vero nesciunt delectus?
                    </p>
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea tenetur quas eos officia tempora laboriosam iure, natus dicta molestiae quos quae nostrum iste, non ratione praesentium vero nesciunt delectus?
                    </p>
                </div>
            </div>
        </div>
    )
}

function BestDeals() {
    const [activeTab, setActiveTab] = useState('appartment');

    return (
        <div className="bg-neutral-100 py-40">
            <div className="container px-2.5 mx-auto">
                <div className="md:flex justify-between items-end mb-10">
                    <h2 className="lg:w-1/3 xl:w-1/4">
                        <SectionTitle label="Best deal" title="Find Your Best Deal Right Now!" />
                    </h2>

                    <div className="flex flex-wrap gap-5 mt-3 md:mt-0">
                        <div className={`${activeTab == 'appartment' ? 'bg-primary' : 'bg-black'} hover:bg-primary py-3 px-6 text-white transition-colors rounded-md font-medium cursor-pointer`}
                                onClick={() => setActiveTab('appartment')}>
                            Appartment
                        </div>

                        <div className={`${activeTab == 'villa' ? 'bg-primary' : 'bg-black'} py-3 px-6 text-white hover:bg-primary transition-colors rounded-md font-medium cursor-pointer`}
                                onClick={() => setActiveTab('villa')}>
                            Villa House
                        </div>

                        <div className={`${activeTab == 'penthouse' ? 'bg-primary' : 'bg-black'} py-3 px-6 text-white hover:bg-primary transition-colors rounded-md font-medium cursor-pointer`}
                                onClick={() => setActiveTab('penthouse')}>
                            Penthouse
                        </div>
                    </div>
                </div>

                {/* Tabs content */}
                {
                    activeTab == 'appartment' && (
                        <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <TabContent
                                totalSpace="185 m2"
                                floorNumber="26th"
                                roomsNumber="4"
                                parkingAvailable="Yes"
                                paymentProcess="Bank"
                                img={dealImg1}
                            />
                        </motion.div>
                    )
                }

                {
                    activeTab == 'villa' && (
                        <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <TabContent
                                totalSpace="250 m2"
                                floorNumber="26th"
                                roomsNumber="5"
                                parkingAvailable="Yes"
                                paymentProcess="Bank"
                                img={dealImg2}
                            />
                        </motion.div>
                    )
                }

                {
                    activeTab == 'penthouse' && (
                        <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <TabContent
                                totalSpace="320 m2"
                                floorNumber="34th"
                                roomsNumber="6"
                                parkingAvailable="Yes"
                                paymentProcess="Bank"
                                img={dealImg3}
                            />
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
}

export default BestDeals;