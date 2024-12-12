import React from 'react'
import Image from 'next/image'

const Header = () => {

    return (
        <header className=' absolute w-[90%] left-1/2 -translate-x-1/2 top-6 px-4 py-2  rounded-lg  text-white bg-header flex items-center justify-between '>

            <div className='flex gap-2 items-center'>

                <Image 
                    className="fill-white"
                    src="/cook.svg" 
                    alt="Chef Logo"
                    width={30}
                    height={30}
                />

                <h1 className='font-bold'>Chef-Cook</h1>

            </div>

            <div>
                <button className='group h-10 w-10 '>
                    <div className='grid justify-items-center gap-1.5'>
                        <span className='h-1 w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2.5'></span>
                        <span className='h-1 w-8 rounded-full bg-white group-hover:scale-x-0 transition'></span>
                        <span className='h-1 w-8 rounded-full bg-white group-hover:-rotate-45 group-hover:-translate-y-2.5'></span>
                    </div>
                </button>
            </div>
            


        </header>
    )

}

export default Header