import React, { useState, useEffect } from "react";
import { fetchFeaturedBiz } from '../service';
import SkeletonFeaturedBiz from './SkeletonFeaturedBiz';
import image from '../assets/logo192.png';

const FeaturedBiz = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFeaturedBiz();
        const formattedData = data.map((biz, index) => ({
          title: biz.name,
          role: biz.categories,
          image: [
            "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
            "https://media.istockphoto.com/id/2167986788/photo/construction-crew-putting-up-framing-of-new-home.jpg?s=612x612&w=0&k=20&c=PmoyuOSrfFNh7cCUUS8gkmcoQ24jhaOTSrShw_Buobc=",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
            "https://media.istockphoto.com/id/2150776295/photo/smiling-woman-using-phone-at-hair-salon.jpg?s=612x612&w=0&k=20&c=0OQ4so6EiXUXeOCElSbRWsm0ziL1bOqyXU0Ufeg7WnQ=",
            "https://media.istockphoto.com/id/182768078/photo/beautiful-manicured-garden-with-bushes-trees-stones-pond-juicy-grass.jpg?s=612x612&w=0&k=20&c=SsoW2rCnVxLXD72F3QModVX9XCkkZ4tD3TZFweYglqM=",
            "https://images.unsplash.com/photo-1522091796544-7e02ab727c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
            "https://media.istockphoto.com/id/2150776295/photo/smiling-woman-using-phone-at-hair-salon.jpg?s=612x612&w=0&k=20&c=0OQ4so6EiXUXeOCElSbRWsm0ziL1bOqyXU0Ufeg7WnQ="
          ][index % 6], // Use one of the six images in a round-robin fashion
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"
        }));
        setCards(formattedData);
      } catch (error) {
        console.error('Error fetching featured biz:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <SkeletonFeaturedBiz />;
  }

  return (
    <>
      <div className="my-14 mx-10">
        <span className="relative flex justify-center">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
          ></div>

          <span className="relative z-10 bg-white px-6">Featured Biz</span>
        </span>
      </div>
      <section className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {cards.map((card, index) => (
          <a key={index} href="#" className="group relative block bg-black overflow-hidden rounded-lg shadow-lg">
            <img
              alt=""
              src={image}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-orange-500">{card.role}</p>
              <p className="text-xl font-bold text-white sm:text-2xl">{card.title}</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{card.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </>
  );
};

export default FeaturedBiz;