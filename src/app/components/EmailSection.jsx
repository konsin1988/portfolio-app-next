'use client'

import React, { useState } from 'react'
import GithubIcon from '../../../public/img/github-icon.svg'
import LinkedinIcon from '../../../public/img/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted ] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/send';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json();
    console.log(resData)

    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="z-9">
            <h5 className="text-xl font-bold text-white my-2 ">Let's connect</h5>
            <p className="text-third mb-4 max-w-md">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quisquam praesentium, deleniti nam, expedita odit perferendis pariatur iure perspiciatis non possimus quidem molestiae voluptatum ducimus.
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="github.com">
                <Image src={GithubIcon} alt="Github icon" />
              </Link>
              <Link href="linkedin.com">
                <Image src={LinkedinIcon} alt="Linkedin icon" />
              </Link>
            </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email"  className="text-white block 
              text-sm font-medium mb-2">
                Your email
              </label>
              <input type="email" id="email" name="email" 
              required placeholder="ivan@ivanov.com" 
              className="bg-[#18191E] border border-[#33353E] placeholder-[#9CA2A9] 
              text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
            </div>

            <div className="mb-6">
              <label htmlFor="subject"  className="text-white block
              text-sm font-medium mb-2">
                Subject
              </label>
              <input type="text" id="subject" name="subject"
              required placeholder="Please write something" 
              className="bg-[#18191E] border border-[#33353E] placeholder-[#9CA2A9] 
              text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
            </div>
            <div className="mb-6">
              <label htmlFor="message" 
              className="text-white block text-sm mb-2 font-medium">
                <textarea name="message" id="message"
                className="bg-[#18191E] border border-[#33353E] placeholder-[#9CA2A9] 
              text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about.."/>
              </label>
            </div>
            <button 
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white 
              font-medium py-2.5 px-5 rounded-lg w-full">
                Send Message
            </button>
            {
              emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Email send successfully!
                </p>
              )
            }
          </form>
        </div>

    </section>
  )
}

export default EmailSection