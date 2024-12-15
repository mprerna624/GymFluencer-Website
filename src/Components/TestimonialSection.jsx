import React from 'react'
import Container from './Container'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

function TestimonialSection() {

    const testimonials = [
        {
            image: user1,
            name: "User One",
            review: "Best Fitness App!! GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!"
        },
        {
            image: user2,
            name: "User Two",
            review: "So easy to use! I love how user-friendly the app is. Logging workouts has never been easier!"
        },
        {
            image: user3,
            name: "User Three",
            review: "Incredible Progress Tracker! I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!"
        },
    ]

  return (
    <div className="py-16">
    <Container>
      <h1 className="text-4xl font-semibold text-center mb-4 text-slate-900 dark:text-neutral-100">Testimonials</h1>
      <p className='mb-12 text-lg text-center text-slate-700 dark:text-gray-400'>Real stories from our community showcasing the impact GymFluencer has had on their fitness journey.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((user, index) => (
          <div key={index} className="flex flex-col justify-center items-center text-center bg-slate-800 dark:bg-white p-6 rounded-lg shadow-lg shadow-black/50 dark:shadow-md dark:shadow-slate-200 transition-transform hover:scale-105">
            <FaQuoteLeft className="text-amber-500 text-4xl mb-4" />
            <p className="text-gray-200 dark:text-gray-700 text-lg italic mb-6">{user.review}</p>
            <img
              src={user.image}
              alt="User Image"
              className="w-16 h-16 rounded-full border-4 border-blue-900 mb-4"
            />
            <h3 className="text-xl font-medium text-gray-100 dark:text-gray-900">{user.name}</h3>
            <div className="flex justify-center gap-1 text-yellow-500 mt-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
  )
}

export default TestimonialSection