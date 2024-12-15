import React from 'react'
import Container from './Container'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled } from "react-icons/tb";

function StepsSection() {

    const steps = [
        {
            heading: "Step 1 : Click on Get Started",
            content: "Start by opening the GymFluencer App. The intuitive home screen gives you access to all features.",
            icon: <TbCircleNumber1Filled />
        },
        {
            heading: "Step 2 : Log Your Exercises",
            content: "Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.",
            icon: <TbCircleNumber2Filled />
        },
        {
            heading: "Step 3 : Count Your Reps",
            content: "Count your reps with precision, ensuring detail is logged. Stay informed on your progress.",
            icon: <TbCircleNumber3Filled />
        },
        {
            heading: "Step 4 : Track Your Progress",
            content: "Review your workout stats and progress over time to stay motivated and reach your fitness goals.",
            icon: <TbCircleNumber4Filled />
        },
        {
            heading: "Step 5 : Review Your Progress",
            content: "Check your workout summaries and progress over time to stay motivated and achieve your fitness goals.",
            icon: <TbCircleNumber5Filled />
        },
    ]

  return (
    <div className='bg-slate-800 py-16'>
        <Container>
            <h1 className='text-white text-4xl font-semibold mb-4 text-center'>Explore our GymFluencer App </h1>
            <p className='text-gray-400 text-center mb-12 text-lg'>GymFluencer is your ultimate fitness companion. Follow these simple steps to make the most of your workout journey.</p>
            <VerticalTimeline>
                {
                    steps.map((eachStep, index) => (
                        <VerticalTimelineElement
                            key={index}
                            iconStyle={{background: "#f59b0e", color: "#fff"}}
                            icon={eachStep.icon}
                        >
                            <h3 className='vertical-timeline-element-title font-bold text-xl'>{eachStep.heading}</h3>
                            <p className='!text-base !font-normal'>{eachStep.content}</p>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </Container>
    </div>
  )
}

export default StepsSection