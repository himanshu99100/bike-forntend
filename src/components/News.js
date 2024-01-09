import React from 'react'
import indianexpress from '../assests/media/IndianExpressNews.png'
import Daniktribun from '../assests/media/DaniktribunNews.jpeg'
import zee from '../assests/media/ZeeNews.png'
import salesmen from '../assests/media/SalesmenNews.png'
import dd from '../assests/media/ddNews.png'
const media = [
    {
        id: 1,
        imgsrc: indianexpress,
        href: 'https://indianexpress.com/article/cities/chandigarh/tesla-job-in-japan-haryana-man-designs-e-cycle-9037835/'
    }, {
        id: 2,
        imgsrc: zee,
        href: 'https://zeenews.india.com/hindi/india/delhi-ncr-haryana/rewari-balawas-ahir-village-haryana-engineer-made-a-e-riksha-plhr/1162328'
    },
    , {
        id: 3,
        imgsrc: dd,
        href: 'https://x.com/DDNewsHaryana/status/1727616132289540334?t=_XMedqR4erZDcgDgRXvOZg&s=09'
    }
]
const News = () => {
    return (
        <div className='my-4 lg:my-12'>
            <h2 className='text-2xl text-center font-bold'>The Media is Talking About Us !</h2>
            <div className='flex justify-center my-6'>
                {media.map((img) => (
                    <div  className='w-25 my-2 mx-4 lg:mx-10 overflow-hidden'>
                        <a href={img.href}>
                            <img key={img.id}  src={img.imgsrc} style={{aspectRatio:'6/2', width:'20rem' ,objectFit:'contain'}} alt='Circular Image' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News
