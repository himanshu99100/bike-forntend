import React, { useState } from 'react'

const Contact = () => {
    async function delayedReload() {

        await new Promise(resolve => setTimeout(resolve, 1000));

        window.location.reload();
    }
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fullname, setfullname] = useState('');
    const [isvisible, setVisble] = useState('hidden')
    const [isvisible1, setVisble1] = useState('hidden')

    const sendmail = async (e) => {
        if (!email || !message) {
            alert("Please enter correct enquiry")
        }
        e.preventDefault();

        const formData = {
            email,
            message,
            fullname
        };
        try {
            const response = await fetch('https://xyx-d8d1.onrender.com/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                setVisble1("block");
                delayedReload();
                throw new Error('Error sending email');

            }
            if (response.ok) { setVisble("block"); }
            delayedReload();


        } catch (error) {
            console.log('error message ', error)
        }
    }
    return (
        <div>
            <div>
            <section className="bg-white">
                    <div className="py-8 lg:py-16 px-4 mx-auto w-full">
                        <h2 className='text-2xl text-center font-bold my-6'>
                            Contact Us !</h2>
                        <div className={`w-1/3 mx-auto ${isvisible} bg-green-500 text-white px-4 py-2 rounded-md shadow-md`}>
                            Message sent successfully
                        </div>
                        <div className={`w-1/3 mx-auto ${isvisible1} bg-red-500 text-white px-4 py-2 rounded-md shadow-md`}>
                            Message Not send
                        </div>
                        <form className="w-full lg:w-1/3 mx-auto p-8 bg-white shadow-md rounded-md">

                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary-500"
                                    placeholder="Full Name"
                                    onChange={(e) => { setfullname(e.target.value) }}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary-500"
                                    placeholder="name@example.com"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary-500"
                                    placeholder="Your inquiry..."
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    required
                                />
                            </div>



                            <button className="bg-black text-white py-2 px-4 flex items-center rounded-2xl mx-auto mt-8"
                                onClick={(e) => sendmail(e)}>
                                <img className='w-8 h-8'
                                    src='https://i.pinimg.com/originals/d5/c8/aa/d5c8aaf2892cf9c6ebc0ec25a75ede69.jpg'></img>
                                Send Message
                            </button>
                        </form>

                    </div>
                </section>

                <div className=' mb-6 lg:flex lg:justify-between'>
                    <div className='lg:w-1/2 h-75 mx-4 lg:mx-10 '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14062.078358116594!2d76.561096!3d28.221905!3m2!1i1024!2i768!4f13.
                            1!3m3!1m2!1s0x390d5b2ae77061f5%3A0xca4671fc29cd98db!2sWEREV%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1704381868878!5m2!1sen!2sin"
                            className='w-full h-full  ' style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className='mx-4'>
                        <h2 className='text-2xl text-center font-bold my-6 text-gray-700'>
                            WEREV PRIVATE LIMITED</h2>
                        <div className='text-left '>
                            <span className='text-md  font-bold text-gray-700'>
                                Address: </span>
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
        </div>


    )
}

export default Contact
