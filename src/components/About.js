import React from 'react'
import img1 from '../assests/aboutImages/img11.jpeg';
import img2 from '../assests/aboutImages/img12.jpeg';
import img3 from '../assests/aboutImages/img13.jpg';
import img4 from '../assests/aboutImages/img14.jpeg';

const imagessection=[
    {
        id:1,
        imgsrc:img1
    },
    {
        id:2,
        imgsrc:img2
    }
    ,{
        id:3,
        imgsrc:img3
    },
    {
        id:4,
        imgsrc:img4
    }
]

const About = () => {
    return (
        <div>
            <div className='mx-4 lg:mx-12'>
                <h1 className='text-3xl font-bold text-gray-800'>About Us</h1>
                <p className='text-xl mb-8'>
                    <strong>WEREV PRIVATE LIMITED</strong> is a Haryana-based ebike startup company. We R ev is an electric vehicle company that provides ebikes at an affordable price for the future society and consumers.
                </p>
                <hr/>

                <h2 className='text-2xl font-bold text-gray-800'>Our Aim (उद्देश्य)</h2>
                <p className='text-xl mb-8'>
                    Our Aim is ZERO for Our universe. One day, our body becomes ash when the soul moves to another new body. कर्म, Make In India, Vocal for Local, Made for the World.
                </p>
                <hr/>

                <h2 className='text-2xl font-bold text-gray-800'>Our Core Values (संस्कार)</h2>
                <p className='text-xl mb-8'>
                    Honesty, Truth, Discipline, 5'S, Dedication, Respect, Time, Punctuality, Sacrifice, and the last one is a Clean Heart & True Soul with Worship of God. जय श्री कृष्ण
                </p>
                <hr/>

                <h2 className='text-2xl font-bold text-gray-800'>Our Vision</h2>
                <p className='text-xl mb-8'>Become No.1 Professional e Bike Manufacturer in the world.</p>
                <hr/>

                <h2 className='text-2xl font-bold text-gray-800'>Our Mission</h2>
                <p className='text-xl mb-8'>Save Energy, Save Environment, Clean Air Quality, Healthy Society with Sustainable Future.</p>
                <hr/>
            </div>
            <div className='flex flex-wrap  my-4 lg:my-10 justify-center'>
                {imagessection.map((img)=>(
                    <div   key={img.id} className='mx-2 '>
                    <img  src={img.imgsrc} style={{aspectRatio:'3/2',width:'15rem' ,objectFit:'contain'}} alt='no img'/>
                </div>
                ))}
            </div>

        </div>
    )
}

export default About
