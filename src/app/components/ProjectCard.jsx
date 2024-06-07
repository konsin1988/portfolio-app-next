import React, {useRef} from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'


const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl, index}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  return (
    <motion.div ref={ref} className="m-4 md:w-[40%] z-5" variants={cardVariants}
      initial="initial" animate={isInView ? "animate" : "initial"} transition={{
      duration: 0.4, delay: index%2*0.4 }}>
        <div
        className="h-56 md:w-[100%] rounded-t-xl relative group" 
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}>
          <div className="overlay absolute 
          top-0 left-0 
          w-full h-full 
          bg-[#181818] bg-opacity-0 
          hidden group-hover:flex group-hover:bg-opacity-80 
          transition-all duration-500 items-center justify-center">
            <Link href={gitUrl} className="h-14 w-14 border-2 
            relative rounded-full border-third hover:border-white group/link mr-4">
            <CodeBracketIcon className="h-10 w-10  text-third 
             cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "/>
            </Link>
            <Link href={previewUrl} className="h-14 w-14 border-2 
            relative rounded-full border-third hover:border-white group/link ">
            <EyeIcon className="h-10 w-10 text-third 
             cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            </Link>

          </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">
                {title}
            </h5>
            <p className="text-third">
                {description}
            </p>
        </div>
    </motion.div>
  )
}

export default ProjectCard