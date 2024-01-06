import React from 'react'

const About = () => {
    return (
        <div>
           <div className='lg:flex lg:justify-between'>
                <div className='lg:w-1/2 h-80 mx-4 lg:mx-10 '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14062.078358116594!2d76.561096!3d28.221905!3m2!1i1024!2i768!4f13.
                            1!3m3!1m2!1s0x390d5b2ae77061f5%3A0xca4671fc29cd98db!2sWEREV%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1704381868878!5m2!1sen!2sin"
                        className='w-full h-full  ' style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='mx-4'>
                    <h2 className='text-2xl text-center font-bold my-6 text-gray-700'>
                        WEREV PRIVATE LIMITED</h2>
                   
                    <div className='text-left'>
                        <span className='text-md  font-bold text-gray-700'>
                            Company Owner: </span>
                        <span className='text-md text-left text-gray-900'>Kamla W/O Bhola Ram</span>
                    </div>
                    <br></br>
                    <div className='text-left '>
                        <span className='text-md  font-bold text-gray-700'>
                            Full-Address: </span>
                        <span className='text-md text-left text-gray-900'>Balawas,Boria Kamalpur, Gokalgarh, Rewari 123401, Haryana,India</span>
                        <br></br>
                        <br></br>
                    </div>
                    <div className='text-left'>
                        <span className='text-md text-left font-bold text-gray-700'>
                            Corporate Identification Number(CIN): </span>
                        <span className='text-md text-left text-gray-900'> U29109HR2023PTC113632</span>
                        <br></br>
                    </div>
                    <br></br>
                    <div >
                        <div className='lg:flex lg:justify-start' >
                            <div >
                                <a href="https://api.whatsapp.com/send?phone=919896126184" >
                                    <img className='w-7 h-7 inline mb-1' src='https://imagensemoldes.com.br/wp-content/uploads/2020/04/WhatsApp-%C3%8Dcone-Preto-PNG.png'></img>
                                    <span className='text-md text-left text-gray-900'>
                                        &nbsp; +91 9896126184 </span></a>

                            </div>

                            <div className='lg:ml-6'>
                                <a className=' inline-block' href="mailto:info@werev.co.in">
                                    <img className='w-9 h-9 inline mb-1' src='https://tse1.mm.bing.net/th?id=OIP.kUzyUTgWA3c0PsZ6kcgFJgHaHa&pid=Api&P=0&h=180'></img>
                                    <span className='text-md text-left text-gray-900'>
                                        &nbsp; info@werev.co.in </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
