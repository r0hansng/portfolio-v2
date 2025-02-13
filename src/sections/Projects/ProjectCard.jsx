import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from './badge';
import { FaGithub } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";

function ProjectCard ({ data }) {
    return (
        <div className="border sm:w-[39%] bg-card text-card-foreground w-full rounded-lg overflow-hidden shadow-lg h-[520px] flex flex-col border-gray-800">
            <img
                src={data.imageUrl}
                alt="Project Thumbnail"
                width={400}
                height={500}
                className="object-cover w-full h-50"
            />
            <div className="flex flex-col justify-between flex-grow p-6 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="mt-2 text-gray-400">{data.description}</p>
                </div>
                <div className="space-y-2">
                    <div className="text-sm font-medium">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                        {data.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className={"border-gray-800"}>
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                    <a
                        href={data.githubLink}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black transition-colors duration-300 bg-white rounded-md shadow cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                    </a>
                    <a
                        href={data.liveLink}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-300 border border-gray-800 rounded-md shadow-sm hover:bg-gray-800 bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GrGlobe className="w-4 h-4" />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    data: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        githubLink: PropTypes.string.isRequired,
        liveLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard