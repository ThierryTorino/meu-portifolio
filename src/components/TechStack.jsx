import Marquee from "react-fast-marquee"
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";


function TechStack(){
    return(
        <div className="overflow-hidden py-5">
            <section className="bg-transparent -rotate-3 text-7xl">
            <Marquee autoFill={true} speed={200} gradient={true} gradientColor="#09090b">
                <h1 className="text-white mx-5"><FaReact/></h1>
                <h1 className="text-white mx-5"><IoLogoJavascript/></h1>
                <h1 className="text-white mx-5"><TbBrandCpp/></h1>
                <h1 className="text-white mx-5"><FaGitAlt/></h1>
                <h1 className="text-white mx-5"><RiTailwindCssFill/></h1>
                <h1 className="text-white mx-5"><FaHtml5/></h1>
                <h1 className="text-white mx-5"><FaCss3/></h1>
            </Marquee>
            </section>
        </div>
        
    )
}

export default TechStack;