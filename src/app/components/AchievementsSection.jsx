"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => (import("react-animated-numbers")), {ssr: false})

const AchievementsSection = () => {

    const achievementsList = [
        {
            metric: "Projects",
            value: "100",
            postfix: "+"
        },
        {
            prefix: "~",
            metric: "Users",
            value: "100000",
        },
        {
            metric: "Awards",
            value: "7"
        },
        {
            metric: "Years",
            value: "5"
        }
    ]
  return (
    <div className='py-8 px-4 xl:gap-16 xm:py-16 xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 px-16 lg:flex lg:flex-row items-center justify-between hidden'>

        {
            achievementsList.map((achievement, index) => {
                return (
                    <div key={index} className="flex flex-col items-center justify-center mx-4 ">
                        <h2 className='text-white text-4xl  font-bold flex flex-row'>
                            {achievement.prefix}
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={parseInt(achievement.value)}
                            locale="en-US"
                            className="text-white text-4xl font-bold"
                            configs={
                                (_, index) => {
                                    return { 
                                    mass: 1,
                                    friction: 100,
                                    tensions: 140 * (index + 1)}
                                }
                            }
                            />
                            {achievement.postfix}
                        </h2>
                        <p className='text-third text-base'>{achievement.metric}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default AchievementsSection