import sliderImage1 from '../../../assets/images/banner-01.jpg';
import sliderImage2 from '../../../assets/images/banner-02.jpg';
import sliderImage3 from '../../../assets/images/banner-03.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface SwiperSlideProps {
    img: string,
    state: string,
    country: string,
    title: string,
}

function SwiperSlideContent({img, state, country, title}: SwiperSlideProps) {
    return (
        <>
            <img src={img} alt="" className='w-full h-full absolute object-cover' />
            
            <div className="relative z-10 py-40 px-4 md:px-[20%]">
                <div className='py-2 px-4 bg-white font-medium inline-block'>
                    {state}, <span className='text-primary'>{country}</span>
                </div>
                <div
                    className="text-white text-6xl font-bold uppercase leading-snug mt-5" 
                    dangerouslySetInnerHTML={{ __html: title }}>
                </div>
            </div>
        </>
    )
}

function Hero() {
    return (
        <div className="swiper">
            <Swiper pagination={true} modules={[Pagination]}>
                <SwiperSlide className="relative">
                    <SwiperSlideContent
                        img={sliderImage1}
                        state="Toronto"
                        country="Canada"
                        title="Hurry!<br>Get the best<br>villa for you" />
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <SwiperSlideContent
                        img={sliderImage2}
                        state="Melbourne"
                        country="Australia"
                        title="Be quick!<br>Get the best<br>villa in town" />
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <SwiperSlideContent
                        img={sliderImage3}
                        state="Miami"
                        country="South Florida"
                        title="Act now! Get<br>heighest level<br>penthouse" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero;