import bannerBg from '../assets/images/page-heading-bg.jpg';

function PageBanner({path, title}: {path: string, title: string}) {
    return (
        <div className="py-32 flex flex-col items-center gap-6" style={{backgroundImage: `url('${bannerBg}')`}}>
            <div className="bg-white py-2 px-6 inline-block uppercase">
                {path}
            </div>

            <h1 className="text-white text-center uppercase font-extrabold text-5xl">
                {title}
            </h1>
        </div>
    );
}

export default PageBanner;