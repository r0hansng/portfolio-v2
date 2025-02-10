import React from 'react'

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
    ];
    return (
        <>

            <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
                <div className="flex flex-col gap-10 max-w-[900px]">
                    {experiencesData.map((items, index) => (
                        <div key={index}>
                            <div className=" p-5 w-full border border-gray-800 rounded-lg">
                                <h1 className="font-semibold text-2xl capitalize">
                                    {items.title}
                                </h1>
                                <p className="font-normal mt-2">{items.location}</p>
                                <p className="font-normal mt-1">{items.organization}</p>
                                <p className="mt-4 font-normal text-gray-700">
                                    {items.description}
                                </p>
                                <p className="font-normal mt-5">{items.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
