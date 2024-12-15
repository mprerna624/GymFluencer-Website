import React, { useState } from 'react'
import Container from './Container'
import { FiChevronDown } from 'react-icons/fi';

function FAQSection() {

    const faqs = [
        {
            question: "How do I log my workouts?",
            answer: "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps."
        },
        {
            question: "Can I track my calories burned?",
            answer: "Yes, you can track calories burned through the application tracking features."
        },
        {
            question: "Is this application suitable for beginners?",
            answer: "Absolutely! GymFluencer is designed to be user-friendly and suitable to all fitness levels."
        },
        {
            question: "What features does the application offers?",
            answer: "The app offers workout logging, rep counting, calorie tracking and progress reviews."
        },
        {
            question: "How can I reset my password?",
            answer: "You can reset your password by going to the login screen and selecting - Forgot Password."
        },
    ]

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(index === openIndex ? null : index);
      };

  return (
    <div className="bg-gray-100 dark:bg-slate-900 py-16">
        <Container>
            <h1 className="text-4xl font-semibold text-center mb-6 text-slate-900 dark:text-neutral-100">Frequently Asked Questions (FAQs)</h1>
            <p className='text-lg text-indigo-900 dark:text-indigo-100 text-center mb-12'>Find answers to your questions about the GymFluencer application, designed to enhance your fitness journey.</p>
            <div className="space-y-4">
            {
                faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <button  onClick={() => toggleAccordion(index)} className="flex items-center justify-between w-full p-4 text-left text-indigo-950 font-medium focus:outline-none">                        
                            <span>{faq.question}</span>
                            <FiChevronDown className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {
                            openIndex === index && (
                                <div className="p-4 text-gray-700">
                                    <p>{faq.answer}</p>
                                </div>
                            )
                        }
                    </div>
                ))
            }
            </div>
        </Container>
  </div>
  )
}

export default FAQSection