import React from 'react'
import {
  FaBookBookmark,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { GrGithub, GrMailOption } from "react-icons/gr";
import '../../global.css'
import GlobeComponent from './Globe';
import Button from '../../components/Button/Button';
import MarqueeDemo from './Skills';

function BentoGrid() {
  return (
    <div className="flex items-center justify-center flex-wrap sm:w-[1000px] gap-2 mt-10">
      <h1 className="sm:text-4xl text-xl font-semibold sm:mb-5">About me</h1>
      <div className="flex flex-col md:flex-row w-full gap-2">
        <div className="p-2 md:w-1/2 w-full">
          <div className="h-full rounded-lg flex items-center justify-center border border-gray-800">
            <div className="p-2">
              <div className="flex items-center gap-1 mt-2">
                <FaLocationDot />
                <h1 className="text-sm text-gray-400">Navigating the world of tech</h1>
              </div>
              <GlobeComponent />
            </div>
          </div>
        </div>
        <div className="p-2 md:w-1/2 w-full">
          <div className="h-full rounded-lg flex items-center justify-center border border-gray-800">
            <div className="flex flex-col gap-5 p-5 mr-auto sm:mr-5">
              <div className=" md:mt-[-30px] md:mr-[200px] flex items-center gap-2 ">
                <FaLink />
                <h1 className=" text-sm text-gray-400">Connect with me</h1>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <a
                  href="https://github.com/r0hansng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GrGithub className="md:text-3xl text-2xl" />
                  <h1 className="text-sm">Github</h1>
                </a>
                <a
                  href="https://www.linkedin.com/in/rohansng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="md:text-3xl text-2xl" />
                  <h1 className="text-sm">LinkedIn</h1>
                </a>
                <a
                  href="https://x.com/r0hansng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaXTwitter className="md:text-3xl text-2xl" />
                  <h1 className="text-sm">Twitter</h1>
                </a>
                <a
                  href="https://www.instagram.com/r0hansng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaInstagram className="md:text-3xl text-2xl" />
                  <h1 className="text-sm">Instagram</h1>
                </a>
                <a
                  href="mailto:contact.me.rohansingh@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GrMailOption className="md:text-3xl text-2xl" />
                  <h1 className="text-sm">Mail</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2">
        <div className="p-2 md:w-2/3 w-full h-64">
          <div className="h-full rounded-lg flex items-center justify-center border border-gray-800">
            {/* Scrolling languages container */}
            <div className="relative overflow-hidden w-[300px] sm:w-[450px] md:w-[500px]">
              {/* Scrolling languages section upper */}
              <div className="flex w-full flex-col items-center justify-center overflow-hidden bg-background gap-4 md:gap-10">
                <div className="relative overflow-hidden w-[300px] sm:w-[450px] md:w-[500px] lg:w-full">
                  <MarqueeDemo />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </div>
        <div className="p-2 md:w-2/3 w-full h-64">
          <div className="h-full rounded-lg flex items-center justify-center border border-gray-800">
            <div className="flex flex-col w-full h-full p-5">
              <div className="flex items-center gap-2 mb-10">
                <FaBookBookmark />
                <h1 className="text-sm text-gray-400">Currently Learning</h1>
              </div>
              <div className="flex w-full items-center justify-center">
                <img src="/assets/images/languages/python.png" width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/about_me">
        <Button className="bg-white text-black cursor-pointer hover:bg-gray-200 duration-300" variant={"default"}>More About Me</Button>
      </a>
    </div>
  )
}

export default BentoGrid
