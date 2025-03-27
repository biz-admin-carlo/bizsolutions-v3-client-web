import React from "react";
import LoginHeader from "../components/LoginHeader";
import Icon from "../assets/icons/icon-app-logo.jpg";
import "../assets/index.css";

const HistoryPage = () => {
  return (
    <>
      <LoginHeader />
      
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
          <div className="mb-6 max-w-xl text-start">
            <h1 className="text-3xl font-bold sm:text-5xl">Meet the Team.</h1>
          </div>
          <hr className="pt-12 border-gray-300" />

          <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div>
                    <div class="max-w-lg md:max-w-none">
                    <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
                        Where did we started?
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed italic">
                        <em>
                            At <span className="text-orange-500">BizSolutions</span>, we transcend the traditional boundaries of web development. Our ethos is centered around not just creating websites, but weaving comprehensive digital experiences that deeply connect with your audience. We are driven by a relentless passion to fuse the latest in cutting-edge technology with groundbreaking design, ensuring your brand not only stands out but sets new benchmarks in digital innovation.
                        </em>
                    </p>
                    </div>
                </div>

                <div>
                    <img
                    src={Icon}
                    alt="BizSolutions Icon"
                    className="px-14"
                    />
                </div>
                </div>
            </div>
          </section>

          <div className="mt-4">
            <h2 className="text-xl text-black">Pioneering Digital Innovation in Silicon Valley</h2>
            <p className="text-sm py-2 text-justify text-gray-700">
                Welcome to <span className="text-orange-500">BizSolutions</span>, nestled in the heart of innovation at 20289 Stevens Creek Blvd #1039, Cupertino, CA 95014. In the dynamic landscape of Silicon Valley, California, we stand as a beacon of digital creativity and technological advancement. BizSolutions isn't just a brand; it's a revolution in the realm of business commerce. Our mission is to foster a vibrant community where ideas flourish and boundaries are pushed.
            </p>

            <h2 className="text-xl pt-6 text-black">Crafting Digital Experiences That Resonate</h2>
            <p className="text-sm py-2 text-justify text-gray-700">
                Here in <span className="text-orange-500">BizSolutions</span>, we do more than build websites; we sculpt digital masterpieces. Our expertise lies in creating immersive experiences that captivate and engage. Driven by our passion for innovation, we blend state-of-the-art technology with groundbreaking design, ensuring your brand not only stands out but sets new standards.
            </p>

            <h2 className="text-xl pt-6 text-black">Your Gateway to Digital Excellence</h2>
            <p className="text-sm py-2 text-justify text-gray-700">
                Embark on a journey of digital transformation with us. Whether refining an existing digital presence or launching a bold new venture, our team is dedicated to transforming your vision into a digital masterpiece. We specialize in sleek, responsive designs, SEO-optimized content, and a user experience that speaks directly to your audience's needs and aspirations.
            </p>

            <h2 className="text-xl pt-6 text-black">Collaboration Meets Innovation</h2>
            <p className="text-sm py-2 text-justify text-gray-700">
                Your vision is the canvas for our creativity. In <span className="text-orange-500">BizSolutions</span>, we believe in the power of collaboration. Share your dreams with us, and watch as our experts infuse them with innovation and expertise. Staying abreast of the latest digital trends and technologies, we ensure your website transcends traditional boundaries, becoming a vibrant hub for growth and customer engagement.
            </p>

            <h2 className="text-xl pt-6 text-black">Start Your Digital Journey with Us</h2>
            <p className="text-sm py-2 text-justify text-gray-700">
                The journey towards an extraordinary digital presence begins with a single step. Reach out to us, and let's start a conversation that could redefine the digital landscape. Your aspirations, coupled with our expertise, are the perfect recipe for a digital experience that's not just seen but remembered.
            </p>

            <h2 className="text-xl pt-6 text-black">Join Us in Shaping the Future</h2>
            <p className="text-sm pt-2 pb-14 text-justify text-gray-700">
                For <span className="text-orange-500">BizSolutions</span>, your future is our focus. Let's collaborate to create something extraordinary. Visit us in Silicon Valley, send us a message, or give us a call. We are more than ready to embark on this exciting journey with you.
            </p>

            <hr className="pt-12 border-gray-300" />

            <h2 class="text-center caveat-history-font text-xl tracking-tight text-gray-900 sm:text-5xl">
                "In <span className="text-orange-500">BizSolutions,</span> we’re more than just a web development company; <br/> we’re your partners in digital success."
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
