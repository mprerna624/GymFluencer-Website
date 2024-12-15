import React, { useEffect } from 'react'
import Container from './Container'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'

function FeaturesSection() {

    const featureCards = [
        {
            image: card1,
            title: "Effortless Workout Logging",
            content: "Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision."
        },
        {
            image: card2,
            title: "Accurate Rep Counting",
            content: "Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance."
        },
        {
            image: card3,
            title: "Calorie Calculation Made Easy",
            content: "Calculate calories burned during workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated."
        },
        {
            image: card4,
            title: "Personalized Workout Plan",
            content: "An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster."
        },
        {
            image: card5,
            title: "Personalized Diet Plan",
            content: "An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness."
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
          const gridCards = document.querySelectorAll('.grid-card');
          const triggerPoint = window.innerHeight * 0.9; 
      
          gridCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top; 
            if (cardTop < triggerPoint) {
              card.classList.add('animate-appear'); 
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
      
        // Call the handleScroll function initially to check if any grid cards are already in view
        handleScroll();
      
        // Cleanup function: Remove the scroll event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

  return (
    <section className="py-16 px-4">
      <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-neutral-100">Discover our App's Key Features</h2>
            <p className="text-lg text-slate-700 dark:text-gray-400">GymFluencer is your ultimate fitness companinion, designed to help you track your workouts with ease. Our application allows you to log exercises, count reps, and calculate calories burned, all through a user-friendly interface. Whether you're a beginner or a seasoned athlete, our app will keep you motivated and on track.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {featureCards.map((eachCard, index) => (
              <div
                key={index}
                className="grid-card bg-slate-800 dark:bg-neutral-100 p-6 rounded-lg shadow-xl opacity-0 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }} // Stagger the animation
              >
                <img
                    src = {eachCard.image} 
                    alt="Card Feature"
                    className="w-full h-48 object-contain mb-4 rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mb-2 text-white dark:text-black">{eachCard.title}</h3>
                <p className="text-gray-400 dark:text-gray-600">{eachCard.content}</p>
              </div>
            ))}
          </div>
      </Container>
    </section>
  )
}

export default FeaturesSection