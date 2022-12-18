import React from 'react'
import '../Styles/Main.css'
import OilPlant from '../Assets/oilplant.png'
import Card from 'react-bootstrap/Card';

const Main = () => {
  return (
    <div className='my-main' id='my-main'>
      <div className='mainfirsttext'>
        <div>
          <h1 className='women'>Women</h1>
          <h1 className='women'>In Oil World</h1>
          <h2 className='research'>Global Oil and Gas Research</h2>
        </div>
        <div className='services'>
          <button className='servicesbtn' type="submit"><a href="#top">News Letter</a></button>
          <button className='servicesbtn' type="submit"><a href="#top">Advertise</a></button>
        </div>
      </div>
      <div className='mainsecondtext'>
        <div className='myfirstcard'>
          <Card border="light" style={{ width: '17rem', height: '12rem' }}>
            <Card.Header>Table of Content</Card.Header>
            <Card.Body className='mycards'>
              <Card.Title className='mycardtitle'>
                <a className='mycardsref' href="#top">Life of an Offshore</a>
              </Card.Title>
              <Card.Title className='mycardtitle'>
                <a className='mycardsref' href="#top">Life of an Offshore</a>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className='oilplant'>
          <img className='img-fluid' src={OilPlant} width={700} alt="" />
          <p></p>
        </div>

      </div>


    </div>
  )
}

export default Main