import React from 'react'
import indianexpress from '../assests/media/IndianExpressNews.png'
import salesmen from '../assests/media/SalesmenNews.png'
import dd from '../assests/media/ddNews.png'
const media = [
    {
        id: 1,
        imgsrc: indianexpress,
        href: 'https://indianexpress.com/article/cities/chandigarh/tesla-job-in-japan-haryana-man-designs-e-cycle-9037835/'
    }, {
        id: 2,
        imgsrc: 'https://www.thestatesman.com/wp-content/themes/statesmantheme/images/the-statesman-logo-new.png',
        href: 'https://www.thestatesman.com/india/haryanas-start-up-policy-shows-results-at-iitf-delhi-1503243082.html'
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
                    <div  className='w-full lg:w-1/6    h-50 my-2 mx-4 overflow-hidden'>
                        <a href={img.href}>
                            <img key={img.id}  src={img.imgsrc} className='w-full lg:w-2/3 object-contain' style={{aspectRatio:'3/2'}} alt='Circular Image' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News
