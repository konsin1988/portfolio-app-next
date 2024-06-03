'use client'

import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const tabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>Javascript</li>
                <li>SaSS</li>
            </ul>
        )
    }, 
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
               <li>Frontend Result Univercity school</li>
               <li>Moscow State Univercity of Food Production</li>
            </ul>
        )
    }, 
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
               <li>Frontend Result Univercity school</li>
               <li>Moscow State Univercity of Food Production</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

  return (
    <section className="text-white">
        <div className="md:grid 
        md:grid-cols-2 
        gap-8 xl:gap-16 
        items-center 
        py-8 px-4 sm:py-16">
            <Image src={"/img/about.jpg"} width={500} height={500} alt='web developer' />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
                <p className="text-base lg:text-lg text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis temporibus ipsam laborum ullam quisquam eaque numquam vel quidem illum, maiores possimus corporis reiciendis itaque repellat, minus voluptas odio? Labore, facilis nobis quos esse adipisci, vel quae quod molestiae necessitatibus in fugit earum numquam illum? Nisi expedita rem velit totam recusandae?
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                        {" "}
                        Certification{" "}
                    </TabButton>
                    
                </div>
                <div className="mt-8">
                    {tabData.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection