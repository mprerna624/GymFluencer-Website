import React, { useEffect, useState } from 'react'
import hero_section_bg from '../assets/hero-section-bg.jpg';

function HeroSection() {

    const [animate, setAnimate] = useState(false);

  // Trigger the animation after the component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full bg-cover bg-center mt-[3.75rem]" style={{ backgroundImage: `url(${hero_section_bg})`, height: `calc(100vh - 3.75rem)` }}>
    <div className={`flex flex-col items-center justify-center text-center text-white p-8 h-full w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto transform transition-all duration-1000 delay-200 ease-out ${ animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0' }`}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 text-shadow">Track your Fitness Journey</h1>
      <p className="text-lg sm:text-xl mb-8 sm:mb-14 leading-relaxed tracking-wider">
        Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interfaces.
      </p>
      <button className="px-6 py-2 text-lg font-semibold rounded bg-amber-500 text-white hover:bg-amber-600">Get Started</button>
    </div>
  </div>
  )
}

export default HeroSection