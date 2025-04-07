import React from 'react'
import { PiPlayCircleThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
const Content = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className='flex gap-36 items-center justify-center'>
                    <div>
                    </div>
                    <div className='leading-10' onClick={() => navigate('/random')}>
                        <h1 className='text-4xl font-bold -mt-10'>Collectible Sneakers</h1>
                        <p className='leading-0 mt-8'>
                            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.<br />
                            Pharetra, eu imperdiet ipsum ultrices amet.
                        </p>
                        <div className='flex gap-5 mt-8'>
                            <button className='border-2 rounded-lg h-12 px-5 border-[#78350F] text-[#78350F] font-semibold'>
                                Sign up now
                            </button>
                            <div className='flex items-center gap-2 text-[#78350F] font-semibold'>
                                <span className='text-2xl'>
                                    <PiPlayCircleThin />
                                </span>
                                Watch Demo
                            </div>
                        </div>


                    </div>
                    <img src='Col.png' height={367} width={362}></img>
                </div>
            </div>
        </>

    )
}

export default Content
