import React from 'react';
import PropTypes from 'prop-types';

export const ProjectCard = ({ data }) => {
    return (
        <div className="border bg-card text-card-foreground w-full rounded-lg overflow-hidden shadow-lg h-[520px] flex flex-col border-gray-800">
            <img
                src={data.imageUrl}
                alt="Project Thumbnail"
                width={400}
                height={500}
                className="w-full h-50 object-cover"
            />
            <div className="p-6 space-y-4 flex flex-col flex-grow justify-between">
                <h3>{data.title}</h3>
                <p className="text-gray-400 mt-2">{data.description}</p>
            </div>
            <div className="space-y-2">
                <div className="text-sm font-medium">Technologies Used:</div>
                <div className="flex flex-wrap gap-2">
                    
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
