import SectionTitle from "../../../components/SectionTitle";
import videoBg from '../../../assets/images/video-bg.jpg';
import videoFramImg from '../../../assets/images/video-frame.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function VideoFrame() {
    return (
        <>
            <div className="pt-24 md:pb-72 pb-60" style={{backgroundImage: `url(${videoBg})`}}>
                <h2 className="text-center text-white xl:w-1/4 lg:w-1/2 mx-auto">
                    <SectionTitle label="Video View" title="Get Closer View & Different Feeling" />
                </h2>
            </div>

            <div className="mx-auto lg:w-2/3 px-6 -translate-y-1/2 relative">
                <img src={videoFramImg} alt="" className="w-full rounded-xl" />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary w-[60px] h-[60px] grid place-items-center rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faPlay} inverse size="lg" />
                </div>
            </div>
        </>
    );
}

export default VideoFrame;