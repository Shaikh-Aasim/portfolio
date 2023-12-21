import React from 'react'
import home from "../assets/portfolio/heroImage1.jpg";
import newsapp_img from "../assets/portfolio/newsapp_img.jpg";
import TextUtils from "../assets/portfolio/TextUtils_img.jpg";
import python_project from "../assets/portfolio/python_project.jpg";
import crud_react_php from "../assets/portfolio/crud_react_php.jpg";
import iNotebook from "../assets/portfolio/iNotebook.jpg";


const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: home
        },
        {
            id:2,
            src: newsapp_img
        },
        {
            id:3,
            src: TextUtils
        },
        {
            id:4,
            src: python_project
        },
        {
            id:5,
            src: crud_react_php
        },
        {
            id:6,
            src: iNotebook
        },
        
    ]
  return (
    <div name="portfolio" className='py-28 bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {portfolios.map(({id, src}) => (

            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center '>
                    <button className='w-1/2 px-6 py-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
