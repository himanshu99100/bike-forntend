import React from 'react'
import Videosrc from '../assests/bicyle.mp4'
const Video = () => {
    return (
        <div>
            <div className="relative isolate px-2  lg:px-4 ">
                <div className="mx-auto w-full py-2  lg:w-3/4 lg:py-4 ">
                    <div >
                        <div className="w-full">
                            <video autoPlay loop muted playsInline >
                                <source src={Videosrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-x-6">

                            <button href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Video
