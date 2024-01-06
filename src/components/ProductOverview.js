import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductOverview = () => {
    const { id } = useParams();
    const getProductName = (productId) => {
        switch (productId) {
            case '1':
                return 'Earth';
            case '2':
                return 'Ether';
            case '3':
                return 'Air';
            case '4':
                return 'Fire';
            case '5':
                return 'AirOne';
            default:
                return '';
        }
    };
    const name = getProductName(id);
    const [productData, setProductData] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const [mainImage, setMainimage] = useState(null);
    const fetchData = async () => {
        try {
            const module = await import(`../assests/data/${id}.json`);
            const productJson = module.default;
            setProductData(productJson);
            const images = [];
            for (let i = 1; i <= 10; i++) {
                const imageModule = await import(`../assests/${name}/${name}${i}.jpg`);
                images.push(imageModule.default);
            }
            setProductImages(images);
            setMainimage(images[0]);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [id]);
    if (!productData || productImages.length === 0) {
        return <div>Loading...</div>;
    }

    const { detial, Motor, Lights, Horn, Keys, Carrier, Reflector, Battery, Charger, PowerSpecifications, OperatingModes, Display, DeliveryOption, Service, ManualHandbook } = productData;

    return (
        <div className='lg:mx-5'>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>

                <div className='lg:col-span-4 lg:p-10'>
                    <div className='w-fit mx-4 lg:w-3/5'>
                        <img
                            src={mainImage}
                            className='object-cover  rounded-t-lg'
                            alt='Main Product Image'
                        />

                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <div className='flex  flex-wrap justify-center lg:flex-col  '>
                        {productImages.map((image, index) => (
                            <img
                                key={index}
                                className='w-10 h-10 mx-4 lg:mx-auto border-2 my-2 border-blue-500'
                                src={image}
                                onClick={() => setMainimage(image)}
                                alt={`Thumbnail ${index}`}
                            />
                        ))}
                    </div>
                </div>

            </div>

            <button className="bg-black text-white py-2 px-4 flex items-center rounded-2xl mx-auto mt-8">
                <img src='https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-2.jpg' className='w-8 h-8'></img>
                Add to Cart
            </button>

            <div >
                <div className="product-info-table overflow-x-auto p-4">
                    <div className="flex flex-wrap mb-8">
                        {/* Motor Details */}
                        <div className="max-w-2xl mx-auto w-full sm:w-1/2 mb-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="p-2 text-center bg-yellow-200 border">Motor Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Power:</strong> {Motor.Power}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Torque:</strong> {Motor.Torque}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Speed:</strong> {Motor.Speed}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Range:</strong> {Motor.Range}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Load Capacity:</strong> {Motor.LoadCapacity}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* power Details */}
                        <div className="max-w-2xl mx-auto w-full sm:w-1/2 mb-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th colSpan='4' className="p-2 text-center bg-yellow-200 border">Bettery Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Type:</strong>{Battery.Type}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Detachable:</strong> {Battery.Detachable ? 'True' : 'False'}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Capacity:</strong> {Battery.Capacity}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Warranty:</strong> {Battery.Life.Warranty}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Cycles:</strong> {Battery.Life.Cycles}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-8">
                        <div className="max-w-2xl mx-auto w-full sm:w-1/2 mb-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th colSpan='4' className="p-2 text-center bg-yellow-200 border">Power & Display Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Power Voltage:</strong>{PowerSpecifications.Voltage}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Controller:</strong>{PowerSpecifications.Controller}</td>
                                    </tr> 
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Charger-Type:</strong>{Charger.Type}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">ChargingTime:</strong>{Charger.ChargingTime}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Display:</strong>{Display}</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>

                        {/* Lights Details */}
                        <div className="max-w-2xl mx-auto w-full sm:w-1/2 mb-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th colSpan='4' className="p-2 text-center bg-yellow-200 border">Lights Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Light Front:</strong> {Lights.Front}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Light Rear:</strong> {Lights.Rear}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Reflector:</strong> {Reflector.Available ? 'Yes (' + Reflector.Colors.join(' + ') + ')' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Horn:</strong>{Horn}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Operating Modes Of Bicyle: </strong> {OperatingModes}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Motor Details + Keys Details */}


                    {/* Delivery Details */}
                    <div className="flex flex-wrap mb-8">
                        {/* Delivary Details */}
                        <div className="max-w-2xl mx-auto w-full sm:w-1/2 mb-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th colSpan='3' className="p-2 bg-yellow-200 border text-center">Delivery Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Delivery Option:</strong> {DeliveryOption}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Service:</strong> {Service}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Manual Handbook:</strong> {ManualHandbook}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Keys Details */}
                        <div className="max-w-2xl mx-auto w-full sm:w-1/2 mb-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th colSpan='4' className="p-2 text-center bg-yellow-200 border">Keys Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Key  :</strong> 2 Sets</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Key Type Details:</strong> {Keys.Types}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-left border"><strong className="text-green-500">Carrier:</strong> {Carrier ? 'Yes' : 'No'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>


       
        </div>
    )
}

export default ProductOverview