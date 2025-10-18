"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className='lg:h-lvh w-fit bg-transparent flex items-center justify-center gap-8 py-16'>
      <div className='flex flex-col  items-center justify-center w-11/12 lg:w-3/5 '>

        <div className='flex flex-col lg:flex-row gap-12 lg:gap-0  w-full relative'>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 w-full lg:h-96'>
            <img src="/food1.jpg" alt="" className='lg:absolute h-96 lg:w-64 w-full object-cover z-10 lg:my-8 lg:mx-64 drop-shadow-xl rounded-2xl' />
            <img src="/fooditem1.jpg" alt="" className='relative h-96 lg:h-full object-cover w-full lg:w-60 drop-shadow-x rounded-2xl' />
          </div>

          <div className='flex flex-col gap-8   text-white lg:w-96 px-2  mx-auto lg:absolute lg:right-0 lg:top-1/2 transform lg:-translate-y-1/2'>
          <div className="text-5xl "
                    style={{ fontFamily: "Times New Roman, Times, serif" }}>DINING & CUISINE</div>
           <div>
         Guests at The Aarambha can choose to dine at two restaurants on the property, or have meals delivered to their rooms. The menu is filled with a selection of healthy and delicious meals — with some ingredients grown organically in the resort’s garden.
           </div>
          
          </div>
        </div>

       
        <div className='flex flex-col items-center text-center  text-white lg:grid lg:grid-cols-5 mt-12 gap-6'>
          
          <div>
            {inView && <CountUp start={0} end={50} className='text-3xl font-bold text-hora' />}
            <div className='text-sm font-thin text-white'>MENUS/DISH</div>
          </div>
          <div>
            {inView && <CountUp start={0} end={20} className='text-3xl font-bold text-hora' />}
            <div className='text-sm font-thin text-white'>STAFFS</div>
          </div>
          <div>
            {inView && <CountUp start={0} end={15000} className='text-3xl font-bold text-hora' />}
            <div className='text-sm font-thin text-white'>HAPPY CUSTOMERS</div>
          </div>
          <div className='text-sm text-white w-11/12 lg:w-auto'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        </div>
      </div>
    </div>
  );
}



