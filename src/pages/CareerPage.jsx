import React from "react";
import LoginHeader from "../components/LoginHeader";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const CareerPage = () => {
  return (
    <>
      <LoginHeader />
      
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:h-screen lg:items-center">
          <div className="my-auto max-w-xl text-start">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Careers.</h1>

            <p className="mt-4 text-sm leading-relaxed italic">
              <em>
                At <span className="text-orange-500">BizSolutions</span>, we are always on the lookout for talented and passionate individuals to join our dynamic team. Our commitment to excellence starts with our employees, and we take pride in fostering an inclusive and supportive work environment.
              </em>
            </p>
          </div>

          <div>
            <p className="mt-14 text-sm text-gray-700">
              We currently do not have any open positions, but we are always eager to connect with talented professionals who aspire to be part of our team. If your skills and experience align with our company’s mission and values, we would love to hear from you.
            </p>

            <p className="my-10 text-sm text-gray-700">
              Feel free to send your resume and a cover letter to 
              <a href="mailto:webconsultant@bizsolutions.us" className="text-orange-500 font-medium hover:underline">
                {" "}webconsultant@bizsolutions.us
              </a>. 
              We will review your application and keep it on file for future opportunities.
            </p>

            <hr className="border-gray-300" />

            <h1 className="mt-16 text-2xl font-bold tracking-tight text-orange-500 sm:text-4xl">
              Stay Connected!
            </h1>

            <p className="my-8 text-sm text-gray-700">
              New opportunities can arise at any time, so we encourage you to check back periodically for updates.
            </p>         

            <h1 className="mt-16 text-2xl font-bold tracking-tight text-orange-500 sm:text-4xl">
              Follow Us!
            </h1>
  
            <p className="my-4 text-sm text-gray-700">
              Check our social media pages to stay updated with the latest news from BizSolutions!
            </p>      

            <div className="flex items-center gap-5 mt-8">
              <a href="https://www.linkedin.com/company/bizsolutions-llc/posts/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 text-2xl transition-transform transform hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/SupportusBizSolutions" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl transition-transform transform hover:scale-110">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/bizsolutionsllc/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 text-2xl transition-transform transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@bizsolutionsllc" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl transition-transform transform hover:scale-110">
                <FaTiktok />
              </a>
              <a href="https://www.youtube.com/@BizSolutionsLLC" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 text-2xl transition-transform transform hover:scale-110">
                <FaYoutube />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
