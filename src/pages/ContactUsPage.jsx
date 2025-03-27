import React from "react";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <>
      <Announcement />
      <LoginHeader />

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:h-screen lg:items-center">

          {/* SECTION 1: Introduction */}
          <div className="my-auto text-start">
            <div className="mb-6 text-start">
              <h1 className="text-3xl font-bold sm:text-5xl">Be a Partner.</h1>
            </div>

            <hr className="pt-12 border-gray-300" />

            <p className="mt-4 text-sm leading-relaxed italic">
              <em>
                At <span className="text-orange-500">BizSolutions</span>, we’re not just about creating websites – we craft digital experiences that captivate your audience. Our passion lies in blending cutting-edge technology with innovative design to elevate your brand.
              </em>
            </p>
          </div>

          {/* SECTION 2: Contact Information */}
          <div className="my-15 pb-15">
            <p className="mt-14 text-sm text-gray-700">
              Whether you're looking to revamp your existing website or start a new digital journey, our team is here to bring your vision to life. From sleek, mobile-friendly designs to SEO-optimized content, we ensure that every element of your website is tailored to engage and impress your audience.
            </p>

            <p className="my-6 text-sm text-gray-700">
              Great solutions come from collaboration. Share your vision with us, and let our experts enhance it. With expertise in the latest technologies and trends, we make sure your website is more than just a digital space—it’s a dynamic tool for growth and engagement.
            </p>

            <p className="my-6 text-sm text-gray-700">
              Drop us a message, give us a call, or visit us. We’re excited to discuss how we can bring your project to life. Your journey toward an impactful digital presence starts here.
            </p>

            <h2 className="mt-14 text-xl font-bold text-orange-500 sm:text-2xl">Get in Touch</h2>

            <p className="mt-2 text-sm text-gray-700">
            <span className="font-bold">Office Address</span>:  
            20289 Stevens Creek Blvd, Suite 1039, Cupertino, CA 95014, USA
            </p>

            <p className="mt-2 text-sm text-gray-700">
            <span className="font-bold">Email</span>:{" "}
            <a href="mailto:webconsultant@bizsolutions.us" className="text-orange-500 font-medium hover:underline">
                webconsultant@bizsolutions.us
            </a>
            </p>

            <p className="mt-2 text-sm text-gray-700">
            <span className="font-bold">Phone</span>:{" "}
            <a href="tel:+18332497418" className="font-medium hover:underline">
                +1 833-249-7418
            </a>
            </p>

            <hr className="border-gray-300 mt-6" />

            {/* SECTION 3: Social Media Links */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-orange-500 sm:text-3xl">Stay Connected!</h2>
            <p className="my-4 text-sm text-gray-700">
              Follow us on social media to stay updated with the latest news from BizSolutions!
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

export default ContactUsPage;
