import Featured from "./sections/Featured";
import Hero from "./sections/Hero";
import VideoFrame from "./sections/VideoFrame";
import BestDeals from './sections/BestDeals';
import Properties from "./sections/Properties";
import ContactUs from "./sections/ContactUs";

function Home() {
    return (
        <>
            <Hero />
            <Featured />
            <VideoFrame />
            <BestDeals />
            <Properties />
            <ContactUs />
        </>
    )
}

export default Home;