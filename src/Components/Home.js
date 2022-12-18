import React from 'react'
import Main from './Main'
import NavBar from './NavBar'
import '../Styles/Home.css'
// import Footer from './Footer'

const Home = () => {
  return (
    <div className='my-home' id='my-home'>
      <NavBar />
      <Main />
      {/* <Footer /> */}
    </div>
  )
}

export default Home