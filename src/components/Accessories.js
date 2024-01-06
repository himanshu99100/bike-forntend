import React from 'react'
import { Link } from 'react-router-dom'
import bag from '../assests/accessories/bag1.jpg'
import holder1 from '../assests/accessories/holder1.jpg'
import halmet from '../assests/accessories/halmet1.JPG'
import charger from '../assests/accessories/Charger1.JPG'
import lock from '../assests/accessories/lock1.JPG'
import Airpump from '../assests/accessories/Airpump.jpg'
import toolkit from '../assests/accessories/toolkit.JPG'

const accessoriesItems = [
  {
    id: 1,
    name: "Halmet",
    imgsrc: halmet

  },
  {
    id: 2,
    name: "Charger",
    imgsrc: charger

  },
  {
    id: 3,
    name: "Phone Holder",
    imgsrc: holder1

  },
  {
    id: 4,
    name: "Lock",
    imgsrc: lock

  },
  {
    id: 5,
    name: "Bag",
    imgsrc: bag

  },{
    id:6,
    name:"Air Pump",
    imgsrc:Airpump
  },{
    id:7,
    name:"Toolkit",
    imgsrc:toolkit

  }
]
const Accessories = () => {
  return (
    <div>
      <section className="w-fit mx-14 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-10 mt-10 mb-5 ">
        {accessoriesItems.map((product) => (
          <div key={product.id} className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-2xl  ">
            <Link to={`/accessories/${product.id}`}>
              <img
                src={product.imgsrc}
                alt="Product"
                className="w-2/3 h-60 mx-auto object-fit rounded-t-xl "
              />
              <div>


              </div>
            </Link>
            <span className="text-gray-400 mr-3 uppercase text-xs">WeRev</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {product.name}
            </p>
          </div>
        ))}

      </section>

    </div>
  )
}

export default Accessories
