import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-justify'>Highly motivated Web Developer with a Diploma in Information
Technology from Government Polytechnic Mumbai. Learner in MERN
Stack Technologies . I am passionate about web development and
dedicated to delivering top-notch solutions with keen attention to detail.

        </p>
        <br />

        <p className='text-justify'>
I pursued my Diploma in Information Technology at Government Polytechnic, Mumbai, from October 2021 to December 2023, achieving a commendable academic performance with a GPA of 90.00. Prior to that, I successfully completed my 10th-grade education at Sir J.J. Fort Boys’ High School from May 2020 to May 2021, securing an impressive 85.40%. These educational experiences have equipped me with a strong foundation in IT, fostering my passion for technology and laying the groundwork for my journey into the field of Full Stack Development.
        </p>
      </div>
    </div>
  )
}

export default About
