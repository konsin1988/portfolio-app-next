'use client'

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: "1",
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/img/projects/1.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: "2",
        title: "Photography Portfolio Website",
        description: "Project 2 description",
        image: "/img/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: "3",
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/img/projects/3.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: "4",
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/img/projects/4.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: "5",
        title: "React Firebase Template",
        description: "Project 5 description",
        image: "/img/projects/5.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: "6",
        title: "Full-stack Roadmap",
        description: "Project 6 description",
        image: "/img/projects/6.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

  return (
    <section>
        <h2 className="sm:text-5xl text-3xl 
        font-bold text-center lg:mr-40 mt-4 mb-8">
            My projects 
        </h2>
        <div className="text-white flex-row flex justify-center
         items-center gap-2 mb-3">
            <ProjectTag onClick={handleTagChange} 
            name="All" isSelected={tag === "All"}/>
            <ProjectTag onClick={handleTagChange} 
            name="Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick={handleTagChange} 
            name="Mobile" isSelected={tag === "Mobile"}/>
            
        </div>
        <div className="md:flex md:flex-wrap md:w-full justify-center">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} title={project.title}
                description={project.description} imgUrl={project.image}
                gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
            ))}
        </div>

    </section>
  )
}

export default ProjectsSection