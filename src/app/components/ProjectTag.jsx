import React from 'react'

const ProjectTag = ({name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-white border-primary-500" : "text-third border-slate-600 hover:border-white"
  return (
    <button className={`rounded-full 
    border-2 px-6 py-1 
    sm:text-2xl text-xl ${buttonStyles}`} 
    onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag