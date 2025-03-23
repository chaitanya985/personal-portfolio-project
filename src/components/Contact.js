import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 style={{fontFamily:"Tahoma"}} className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-indigo-600 pb-2 text-center align-center mx-auto text-stone-50">
                Contact Me
            </h2> 
            <div className="flex gap-8 justify-center my-10">
                <a style={{color:"white"}} rel="noreferrer"
                   target="_blank"
                   className="text-center hover:text-indigo-600 transition-colors duration-300 flex flex-col items-center hover:scale-[120%] transition-transform ease-in-out"
                   href="https://www.linkedin.com/in/chaitanyapanicker98/">
                    <FaLinkedin className="text-4xl mb-2 " />
                    <span className="font-bold">LinkedIn</span>
                </a>
                <a style={{color:"white"}} rel="noreferrer"
                   target="_blank"
                   className="text-center hover:text-indigo-600 transition-colors duration-300 flex flex-col items-center hover:scale-[120%] transition-transform duration-300 ease-in-out"
                   href="mailto:chaitanya.panicker98@gmail.com">
                    <MdEmail className="text-4xl mb-2" />
                    <span className="font-bold">Email</span>
                </a>
                <a style={{color:"white"}} rel="noreferrer"
                   target="_blank"
                   className="text-center hover:text-indigo-600 transition-colors duration-300 flex flex-col items-center hover:scale-[120%] transition-transform duration-300 ease-in-out"
                   href="https://github.com/chaitanya985">
                    <FaGithub className="text-4xl mb-2" />
                    <span className="font-bold">GitHub</span>
                </a>
                {/* <a style={{color:"white"}} rel="noreferrer"
                   target="_blank"
                   className="text-center hover:text-indigo-600 transition-colors duration-300 flex flex-col items-center hover:scale-[120%] transition-transform duration-300 ease-in-out"
                   href="https://wa.me/9850741837">
                    <FaWhatsapp className="text-4xl mb-2" />
                    <span className="font-bold">Message</span>
                </a> */}
            </div>
        </section>
    );
}