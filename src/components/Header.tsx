import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter,faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from './Navbar';

function Header() {
    return (
        <header>
            {/* Header top */}
            <div className="border-b-2 hidden sm:block">
                <div className="container py-3 mx-auto flex justify-between">
                    <div className="flex divide-x-2">
                        <div className="flex items-center gap-2 pe-3">
                            <FontAwesomeIcon icon={faEnvelope} color="#f35525" />
                            <span>info@company.com</span>
                        </div>
                        <div className="flex items-center gap-2 ps-3">
                            <FontAwesomeIcon icon={faMap} color="#f35525" />
                            <span>Sunny Isles Beach, FL 33160</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="#" className="w-[30px] h-[30px] rounded-full grid place-items-center bg-neutral-400 hover:bg-primary transition-colors">
                            <FontAwesomeIcon icon={faFacebook} inverse />
                        </a>

                        <a href="#" className="w-[30px] h-[30px] rounded-full grid place-items-center bg-neutral-400 hover:bg-primary transition-colors">
                            <FontAwesomeIcon icon={faTwitter} inverse />
                        </a>

                        <a href="#" className="w-[30px] h-[30px] rounded-full grid place-items-center bg-neutral-400 hover:bg-primary transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} inverse />
                        </a>

                        <a href="#" className="w-[30px] h-[30px] rounded-full grid place-items-center bg-neutral-400 hover:bg-primary transition-colors">
                            <FontAwesomeIcon icon={faInstagram} inverse />
                        </a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <Navbar />
        </header>
    );
}

export default Header;