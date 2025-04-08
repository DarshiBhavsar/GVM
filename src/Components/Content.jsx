import React from 'react';
import { PiPlayCircleThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Content = () => {
    const navigate = useNavigate();

    return (
        <div className="px-6 py-10">
            <div className="flex flex-col-reverse lg:flex-row items-center px-4 md:px-10 py-3  gap-36">
                <div
                    className="text-center lg:text-left leading-10"

                >
                    <h1 className="text-4xl sm:text-5xl xl:text-5xl font-bold mt-4 lg:mt-0 font-roboto">
                        Collectible Sneakers
                    </h1>

                    <p className="mt-4 text-sm sm:text-base">
                        Sit elit feugiat turpis sed integer integer accumsan turpis.
                        Sed suspendisse nec lorem <br />mauris.
                        Pharetra, eu imperdiet ipsum ultrices amet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center lg:justify-start">
                        <button className="border-2 rounded-lg h-12 px-5 border-[#78350F] text-[#78350F] font-semibold font-roboto">
                            Sign up now
                        </button>
                        <div className="flex items-center gap-2 text-[#78350F] font-semibold cursor-pointer font-roboto">
                            <PiPlayCircleThin className="text-2xl" />
                            Watch Demo
                        </div>
                    </div>
                </div>
                <img
                    src="Col.png"
                    alt="Collectible Sneakers"
                    className=" w-64 xl:w-auto sm:w-80 md:w-96 h-auto"
                />
            </div>
        </div>
    );
};

export default Content;
