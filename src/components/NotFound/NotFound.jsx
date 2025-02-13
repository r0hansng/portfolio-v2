import React from 'react'

function NotFound() {
    return (
        <>
            <div className="h-[100vh] flex text-center flex-col items-center justify-center">
                <div>
                    <h1 className="inline-block border-r pt-2 pb-2 border-gray-600 mr-[20px] pr-[23px] text-2xl font-medium align-top">404</h1>
                    <div className="inline-block">
                        <h2 className="pt-[14px] m-0 text-sm font-normal">This page could not be found.</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound