import React, { useState } from 'react'
import Content from './Content'
import { CgShoppingCart } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { LuCircleArrowLeft } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Appbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const sliderRef = useRef(null);

    const images = ["shoes.jpeg", "another_shoe.jpeg", "third_shoe.jpeg"];
    const images1 = ["black_shoe.jpeg", "pink_shoe.jpeg", "white_shoe.jpeg", "color_shoe.jpeg"];
    return (
        <>
            <div className="h-full bg-[#FFFBEB]">
                <div className="flex justify-between items-center px-4 lg:px-10 py-3 text-[#78350F]">
                    <p className="text-lg lg:text-xl font-roboto font-bold">Collers</p>

                    
                    <button
                        className="lg:hidden text-xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    
                    <div className="hidden lg:flex gap-10 items-center text-sm lg:text-base font-roboto font-medium">
                        <p className="cursor-pointer">Products</p>
                        <p className="cursor-pointer">Solutions</p>
                        <p className="cursor-pointer">Pricing</p>
                        <p className="cursor-pointer">Resources</p>
                        <p className="cursor-pointer">Log In</p>
                        <button className="border-2 rounded-lg h-12 px-5 border-[#78350F]">
                            Sign up now
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden flex flex-col gap-4 px-4 text-[#78350F] text-sm font-roboto font-medium pb-4">
                        <p className="cursor-pointer">Products</p>
                        <p className="cursor-pointer">Solutions</p>
                        <p className="cursor-pointer">Pricing</p>
                        <p className="cursor-pointer">Resources</p>
                        <p className="cursor-pointer">Log In</p>
                        <button className="border-2 rounded-lg h-10 px-4 border-[#78350F] w-fit">
                            Sign up now
                        </button>
                    </div>
                )}

                <Content />
            </div>


            <div className='bg-[#0F172A] px-4 md:px-10 py-10'>
                <div className='flex flex-col md:flex-row justify-between items-center text-white gap-4'>
                    <p className='text-2xl xl:text-4xl md:text-4xl text-center md:text-left font-roboto font-bold'>The best of the best</p>
                    <button className='border-2 rounded-lg h-10 font-roboto md:h-12 px-4 md:px-5 border-white font-semibold'>
                        Sign up now
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-14 py-10 font-roboto" onClick={() => navigate('/random')}>
                    {images.map((imgSrc, index) => (
                        <div key={index} className="xl:w-96 sm:w-72 xs:w-72 bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl shadow-[#2E3546]">
                            <img src={imgSrc} alt={`Card ${index + 1}`} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-white font-roboto">Title</h2>
                                <p className="text-white mb-4 mt-4">Experience the quality you deserve with our top-tier item.</p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-[#0c1323] transition flex items-center justify-center w-full gap-3 text-center mt-10">
                                    <CgShoppingCart />
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className='bg-white px-4 md:px-10 py-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-black font-semibold text-2xl md:text-5xl text-center md:text-left font-roboto'>Because they love us</p>
                    <div className='flex gap-0'>
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className='rounded-lg h-10 md:h-12 px-4 md:px-0 text-[#78350F] font-semibold'
                        >
                            <LuCircleArrowLeft className='text-3xl' />
                        </button>
                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            className='rounded-lg h-10 md:h-12 px-4 md:px-5 text-[#78350F] font-semibold'
                        >
                            <FiArrowRightCircle className='text-3xl' />
                        </button>
                    </div>
                </div>


                <div className="py-6 bg-[#FDE68A] h-80 mt-7 relative">
                    <div className="-mx-8 ">
                        <Slider
                            ref={sliderRef}
                            slidesToShow={4.35}
                            slidesToScroll={1}
                            infinite={true}
                            arrows={false}
                            centerMode={false}
                            centerPadding="30px"
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 2.4,
                                        centerPadding: "20px",
                                    },
                                },
                                {
                                    breakpoint: 640,
                                    settings: {
                                        slidesToShow: 1,
                                        centerPadding: "10px",
                                    },
                                },
                            ]}
                        >
                            {images1.map((imgSrc, index) => (
                                <div key={index} className="px-10">
                                    <div className="bg-white rounded-2xl shadow-[#E2E8F0] overflow-hidden shadow-md  xl:w-[250px] lg:w-[375px] md:w-[300px] sm:w-[270px] xs:w-[200px] h-80">
                                        <img
                                            src={imgSrc}
                                            alt={`Card ${index + 1}`}
                                            className="w-full h-40 object-cover"
                                        />
                                        <div className="p-4">
                                            <h2 className="text-lg font-semibold mb-1 text-black font-roboto">Title</h2>
                                            <p className="text-sm text-black mb-2">
                                                Experience the quality you deserve with our top-tier item.
                                            </p>
                                            <div className="border border-white rounded-md transition flex items-center gap-2 text-[#78350F] font-semibold text-sm cursor-pointer">
                                                Read Article
                                                <BsArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>



            </div>

            <div className='bg-white px-4 md:px-10 py-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-black font-bold text-2xl md:text-3xl text-center md:text-left'>Articles by Collectors</p>
                    <button className='rounded-lg h-10 md:h-12 px-4 md:px-5 text-[#78350F] font-semibold'>
                        <div className='flex items-center font-roboto font-normal gap-3'>
                            <p>More Articles</p>
                            <BsArrowRight />
                        </div>
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-14 py-10">
                    {images1.map((imgSrc, index) => (
                        <div key={index} className="w-full  sm:w-72 bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#d3d4d8]">
                            <img src={imgSrc} alt={`Card ${index + 1}`} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-black font-roboto">Title</h2>
                                <p className="text-black mb-4 mt-4">Experience the quality you deserve with our top-tier item.</p>
                                <div className="bg-transparent border border-white  rounded-lg transition flex items-center w-full gap-3 mt-10 text-[#78350F] font-semibold">
                                    Read Article
                                    <BsArrowRight />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <footer className="bg-[#0F172A] text-white py-10 px-4 md:px-10 font-roboto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 font-roboto">Collers</h2>
                        <p className="text-sm max-w-xs">Your go-to store for premium collectible sneakers. Stay stylish, stay unique.</p>
                    </div>

                    <div className="flex flex-col gap-2 font-roboto">
                        <h3 className="font-semibold text-lg mb-2">Company</h3>
                        <a onClick={() => navigate('/about')} className="hover:underline text-sm">About Us</a>
                        <a onClick={() => navigate('/home')} className="hover:underline text-sm">Careers</a>
                        <a onClick={() => navigate('/contact')} className="hover:underline text-sm">Contact</a>
                    </div>

                    <div className="flex flex-col gap-2 font-roboto">
                        <h3 className="font-semibold text-lg mb-2">Support</h3>
                        <a href="#" className="hover:underline text-sm">Help Center</a>
                        <a href="#" className="hover:underline text-sm">Returns</a>
                        <a href="#" className="hover:underline text-sm">Shipping</a>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Collers. All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Appbar
