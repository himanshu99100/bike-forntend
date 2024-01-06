import React from 'react'
import TermsCond from '../components/TermsCond'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TCpage = () => {
  return (
    <div>
      <h2 className='font-2xl'>Terms & Condition</h2>
      <Navbar></Navbar>
      <TermsCond></TermsCond>
      <Footer></Footer>
    </div>
  )
}

export default TCpage
