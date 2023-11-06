import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import ShortTitle from "../../../../components/ShortTitle/ShortTitle";

const Testimonial = () => {
    const testimonials = [
        {
            title: "It was very delicious!",
            content:
                "Last night, I had the opportunity to dine at a charming restaurant in the heart of the city. The food was absolutely divine. I highly recommend this restaurant to anyone looking for an unforgettable dining experience.",
            author: "Marshmello",
            date: "02.02.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "A Culinary Masterpiece",
            content:
                "My dining experience at this restaurant was a true culinary masterpiece. The flavors were extraordinary, and the presentation of each dish was a work of art. I will definitely be returning for another unforgettable meal.",
            author: "GourmetExplorer",
            date: "03.15.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "Exceptional Cuisine",
            content:
                "The restaurant exceeded all my expectations. The cuisine was exceptional, and the attention to detail in every dish was unmatched. I had a memorable evening and will be recommending it to all my friends.",
            author: "FoodieNomad",
            date: "05.10.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "Unforgettable Dining Experience",
            content:
                "I recently had the pleasure of dining at this restaurant, and it was an unforgettable experience. The food was mouthwatering, and the ambiance was perfect for a romantic evening. I'll cherish the memories of this dinner forever.",
            author: "EpicureanAdventurer",
            date: "06.25.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "Delightful Culinary Journey",
            content:
                "My visit to this restaurant was nothing short of a delightful culinary journey. Every dish was a work of art, and the flavors were a harmonious symphony. I'll definitely be returning to explore the rest of the menu.",
            author: "FlavorExplorer",
            date: "07.12.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "Exquisite Dining Experience",
            content:
                "The dining experience at this restaurant was absolutely exquisite. From the appetizers to the desserts, each course was a revelation of taste. It's a gem in the culinary world, and I can't wait to go back.",
            author: "TasteConnoisseur",
            date: "08.30.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "A Taste Sensation",
            content:
                "I had the privilege of dining at this restaurant, and it was a true taste sensation. The flavors were out of this world, and the service was impeccable. I'm already planning my next visit.",
            author: "FoodEnthusiast",
            date: "09.19.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "Culinary Perfection",
            content:
                "If you're looking for culinary perfection, this restaurant is the place to be. The food is simply outstanding, and the entire dining experience is a true delight. Highly recommended!",
            author: "GourmandGlobeTrotter",
            date: "10.05.21",
            image: "/fake-profile.jpg",
        },
        {
            title: "A Food Lover's Paradise",
            content:
                "This restaurant is a food lover's paradise. The dishes are a masterpiece of flavors, and the atmosphere is cozy and inviting. I had an amazing time, and I can't wait to return for more culinary adventures.",
            author: "CuisineExplorer",
            date: "11.15.21",
            image: "/fake-profile.jpg",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto ">
            <div className="flex flex-col justify-center items-center pb-10">
                <ShortTitle text="Testimonial" />
                <h1 className="text-5xl font-title">What they say</h1>
            </div>

            <Swiper
                effect={"coverflow"}
                grabCursor
                loop
                slidesPerView={1}
                spaceBetween={10}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper swiper_container "
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item?.author}>
                        <div className="flex flex-col gap-4 bg-[#f3f2f0] border-yellow justify-center items-start p-7 border-4">
                            <h3 className="font-title text-3xl">{item?.title}</h3>
                            <p>{item?.content}</p>
                            <div className="w-full border-bottom border-b-[3px] border-dotted border-b-[#6254549c]"></div>

                            <div className="flex justify-between items-center w-full">
                                <div className="flex justify-start gap-3 items-center">
                                    <img
                                        className="rounded-full w-9"
                                        src="/fake-profile.jpg"
                                        alt=""
                                    />
                                    <h5 className="text-xs font-extrabold tracking-[2px] uppercase">
                                        {item?.author}
                                    </h5>
                                </div>
                                <span className="text-xs bg-[rgba(26,47,51,.2)] px-[10px] pt-[3px] pb-[1px] rounded-full">
                                    {item?.date}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;
