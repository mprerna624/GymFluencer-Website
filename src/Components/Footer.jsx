import React from 'react';
import Container from './Container';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { CiDumbbell } from 'react-icons/ci';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-neutral-100 dark:text-slate-600 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 gap-6">
            <div className="flex items-center gap-2 text-white dark:text-indigo-900">
              <CiDumbbell className="text-4xl sm:text-5xl md:text-6xl" />
              <span className="text-2xl sm:text-3xl font-bold">GymFluencer</span>
            </div>
            <p className="text-base leading-relaxed max-w-md">
              Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and
              track calories burned. Stay motivated and achieve your goals with our user-friendly interfaces.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-lg">
              <a href="#" className="text-white dark:text-indigo-900 hover:text-amber-500  dark:hover:text-amber-500"><FaFacebook /></a>
              <a href="#" className="text-white dark:text-indigo-900 hover:text-amber-500 dark:hover:text-amber-500"><FaInstagram /></a>
              <a href="#" className="text-white dark:text-indigo-900 hover:text-amber-500 dark:hover:text-amber-500"><FaXTwitter /></a>
              <a href="#" className="text-white dark:text-indigo-900 hover:text-amber-500 dark:hover:text-amber-500"><FaYoutube /></a>
              <a href="#" className="text-white dark:text-indigo-900 hover:text-amber-500 dark:hover:text-amber-500"><FaLinkedin /></a>
            </div>
            <p className="text-sm">&copy; 2024 GymFluencer. All Rights Reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-12 w-full md:w-[60%] lg:w-[50%]">
            <div>
              <h6 className="font-bold text-white dark:text-indigo-900 text-lg underline underline-offset-8 mb-4">Company</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Business</a></li>
                <li><a href="#" className="hover:underline">Franchise</a></li>            
                <li><a href="#" className="hover:underline">Partnership</a></li>
                <li><a href="#" className="hover:underline">Network</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-white dark:text-indigo-900 text-lg underline underline-offset-8 mb-4">About Us</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Security</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-white dark:text-indigo-900 text-lg underline underline-offset-8 mb-4">Contact Us</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">BMI Calculator</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
