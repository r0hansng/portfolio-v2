import React from 'react'
import { TracingBeam } from '../../sections/Experience/tracing-beam';

export const ExperienceCard = () => {
    const experiencesData = [
        {
            title: "Computer-Science Degree",
            location: "Delhi, India",
            organization: "Newton School of Technology",
            description:
                "I have recently started my journey in computer engineering and am currently in my freshman year. I'm eager to learn, explore new technologies, and build a strong foundation in this field. Excited for the challenges and opportunities ahead!",
            date: "2024 - Present",
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
