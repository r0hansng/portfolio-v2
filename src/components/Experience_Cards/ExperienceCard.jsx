import React from 'react'
import { TracingBeam } from '../../sections/Experience/tracing-beam';

export const ExperienceCard = () => {
    const experiencesData = [
        {
            title: "Computer-Science Degree",
            location: "Delhi, India",
            organization: "Newton School of Technology",
            description:
                "I have just begun my journey in computer engineering and am currently in my freshman year.",
            date: "2024 - Present",
        },
        {
            title: "Front-End Developer Intern",
            location: "Mumbai, India",
            organization: "Prodigy Infotech",
            description:
              "During my internship as a Front-end Developer at a Mumbai-based company, I had the opportunity to apply the React skills I acquired from YouTube tutorials in real-world projects. I actively contributed to the creation of their main webpage, gaining valuable hands-on experience in web development.",
            date: "May 2023 - July 2023",
          },
          {
            title: "Freelance Front-End Developer",
            location: "Remote",
            organization: "Self-Employed",
            description:
              "As a freelance front-end developer, I specialize in creating dynamic and visually appealing landing pages. My work involves using modern technologies to deliver responsive and user-friendly designs that help businesses enhance their online presence.",
            date: "Ongoing",
          },
    ];
    return (
        <>
            <TracingBeam className="hidden sm:flex">
                <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
                    <div className="flex flex-col gap-10 max-w-[900px]">
                        {experiencesData.map((items, index) => (
                            <div key={index}>
                                <div className="w-full p-5 border border-gray-800 rounded-lg ">
                                    <h1 className="text-2xl font-semibold capitalize">
                                        {items.title}
                                    </h1>
                                    <p className="mt-2 font-normal">{items.location}</p>
                                    <p className="mt-1 font-normal">{items.organization}</p>
                                    <p className="mt-4 font-normal text-gray-700">
                                        {items.description}
                                    </p>
                                    <p className="mt-5 font-normal">{items.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </TracingBeam>
        </>
    )
}
