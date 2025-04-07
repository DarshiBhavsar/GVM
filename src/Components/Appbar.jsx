import React from 'react'
import Content from './Content'
import { CgShoppingCart } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
const Appbar = () => {
    return (
        <><div className='h-full bg-[#FFFBEB]'>
            <div className='flex font-semibold justify-between items-center px-10 py-3 '>
                <p className='text-[#78350F] '>Collers</p>
                <div className='flex gap-10 text-[#78350F] items-center'>
                    <p>Products</p>
                    <p>Solutions</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                    <p>Login</p>
                    <button className='border-2 rounded-lg h-12 px-5 border-[#78350F]'>
                        Sign up now
                    </button>
                </div>
            </div>
            <Content />

        </div>
            <div>
                <div className='bg-[#0F172A]  px-10 py-10'>
                    <div className='flex justify-between items-center'>
                        <p className='text-white text-3xl'>The best of the best</p>
                        <button className='border-2 rounded-lg h-12 px-5 border-white text-white font-semibold'>
                            Sign up now
                        </button>
                    </div>
                    <div className="flex gap-14 justify-center items-center  py-10">
                        <div className="max-w-xs bg-[#0F172A] rounded-2xl  overflow-hidden shadow-xl shadow-[#2E3546]">
                            <img
                                src="shoes.jpeg"
                                alt="Card"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-white">Title</h2>
                                <p className="text-white mb-4">Experience the quality you deserve with our top-tier item.</p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-[#0c1323] transition flex items-center justify-center w-full gap-3 text-center">
                                    <span>
                                        <CgShoppingCart />
                                    </span>
                                    Buy Now
                                </button>

                            </div>
                        </div>
                        <div className="max-w-xs bg-[#0F172A] rounded-2xl  overflow-hidden shadow-xl shadow-[#2E3546]">
                            <img
                                src="shoes.jpeg"
                                alt="Card"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-white">Title</h2>
                                <p className="text-white mb-4">Experience the quality you deserve with our top-tier item.</p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-[#0c1323] transition flex items-center justify-center w-full gap-3 text-center">
                                    <span>
                                        <CgShoppingCart />
                                    </span>
                                    Buy Now
                                </button>

                            </div>
                        </div>
                        <div className="max-w-xs bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl shadow-[#2E3546]">
                            <img
                                src="shoes.jpeg"
                                alt="Card"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-white">Title</h2>
                                <p className="text-white mb-4">Experience the quality you deserve with our top-tier item.</p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-[#0c1323] transition flex items-center justify-center w-full gap-3 text-center">
                                    <span>
                                        <CgShoppingCart />
                                    </span>
                                    Buy Now
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-white  px-10 py-10'>
                    <div className='flex justify-between items-center'>
                        <p className='text-Black font-semibold text-3xl'>Articles by Collectors</p>
                        <button className='rounded-lg h-12 px-5  text-[#78350F] font-semibold'>
                            <div className='flex items-center gap-3'>
                                <p>More Articles</p>
                                <span>
                                    <BsArrowRight />
                                </span>
                            </div>

                        </button>
                    </div>
                    <div className="flex gap-14 justify-center items-center  py-10">
                        <div className="max-w-xs bg-[#0F172A] rounded-2xl  overflow-hidden shadow-xl shadow-[#2E3546]">
                            <img
                                src="shoes.jpeg"
                                alt="Card"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-white">Title</h2>
                                <p className="text-white mb-4">Experience the quality you deserve with our top-tier item.</p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-[#0c1323] transition flex items-center justify-center w-full gap-3 text-center">
                                    <span>
                                        <CgShoppingCart />
                                    </span>
                                    Buy Now
                                </button>

                            </div>
                        </div>
                        <div className="max-w-xs bg-[#0F172A] rounded-2xl  overflow-hidden shadow-xl shadow-[#2E3546]">
                            <img
                                src="shoes.jpeg"
                                alt="Card"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-white">Title</h2>
                                <p className="text-white mb-4">Experience the quality you deserve with our top-tier item.</p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-[#0c1323] transition flex items-center justify-center w-full gap-3 text-center">
                                    <span>
                                        <CgShoppingCart />
                                    </span>
                                    Buy Now
                                </button>

                            </div>
                        </div>
                        <div className="max-w-xs bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl shadow-[#2E3546]">
                            <img
                                src="shoes.jpeg"
                                alt="Card"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-white">Title</h2>
                                <p className="text-white mb-4">Experience the quality you deserve with our top-tier item.</p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-[#0c1323] transition flex items-center justify-center w-full gap-3 text-center">
                                    <span>
                                        <CgShoppingCart />
                                    </span>
                                    Buy Now
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Appbar
