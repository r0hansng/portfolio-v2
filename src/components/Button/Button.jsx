"use client"

import React from 'react'
import PropTypes from 'prop-types'
import { FaCircle, FaDownload } from "react-icons/fa6";

export const Button = ({ href, text, icon: Icon }) => {
    return (
        <>
            <button className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background h-10 px-4 py-2 bg-white text-black hover:bg-gray-300 transition-all duration-300 cursor-pointer">
                {Icon && <Icon className="mr-2" />}
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            </button>
        </>
    )
}

Button.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    text: PropTypes.string.isRequired,
}

Button.defaultProps = {
    href: "No Link",
    // icon: FaDownlaod,
    text: "Download"
}