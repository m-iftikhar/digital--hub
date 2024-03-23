import React from 'react'
 import Header from './Component/Header'
import Experts from './Component/Experts'
import NewsLetter from './Component/NewsLetter'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Cards from './Component/Cards'
const App = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App