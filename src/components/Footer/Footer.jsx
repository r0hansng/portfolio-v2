import React from 'react'
import '../../global.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-[100px]">
      <small className="mb-2 block text-xs">
        © {currentYear} Rohan. All rights reserved.
      </small>
    </footer>
  )
}