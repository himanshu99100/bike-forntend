import React from 'react'
import vikas from '../assests/Vikas.png'
import br from '../assests/br.png'
const team = () => {
    return (
        <div>
            <div className='flex justify-center flex-wrap my-10'>
                <div className='mx-6 w-1/4 border-2 border-geen-500'>
                    <img src={br} className='h-50'></img>
                    <h2 className='text-md font-bold'>Capt. B.R Yadav (Retd.)</h2>
                    <h2 className='text-md font-bold'>Founder</h2>
                    <p>Distinguished 30 years service in Indian Army. Awarded Army Commander 
                        & VCOAS Commendation Card,
                        President Commission & Appreciation Award.</p>
                </div>
                <div className='mx-6 w-1/4 border-2 border-geen-500'>
                    <img src={vikas} className='h-50'></img>
                    <h2 className='text-md font-bold'>Vikash Yadav</h2>
                    <h2 className='text-md font-bold'>Co Founder</h2>
                    <p>Engineer with 16 years of experience with automotive Industry 
                        (India/Japan/China/Thailand/Taiwan
                        /S.Korea)</p>
                </div>
            </div>
        </div>
    )
}

export default team
