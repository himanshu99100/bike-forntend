import React from 'react'
import Productlist from '../components/Productlist'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Productpage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Productlist></Productlist>
        <Footer></Footer>
    </div>
  )
}

export default Productpage
