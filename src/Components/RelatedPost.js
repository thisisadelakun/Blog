import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Oilfield2 from '../Assets/Oil-fields.jpg'
import Card from 'react-bootstrap/Card';
// import Oilfield3 from '../Assets/Oil-fields2.jpg'
import Pic11 from '../Assets/Yvonne2.jpeg'
import { Link } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import '../Styles/RelatedPost.css'


const RelatedPost = () => {

    return (
        <div className='container relatedcointainer '>
            <h6 className='relatedposth6'>Related Post:</h6>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect
                speed={800}
                loop
                className="myswiper"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="swipersSlide">
                    <Card style={{ width: '18rem', border: 'none' }}  >
                        <Card.Img variant="top" src={Pic11} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Life of an Offshore Medic
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Kathy Price</small> <br />
                                        <small><MdDateRange /> December 01, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/Yvonnedb" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className="swipersSlide">
                    <Card style={{ width: '18rem', border: 'none' }}  >
                        <Card.Img variant="top" src={Oilfield2} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Life of an Offshore Medic
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Kathy Price</small> <br />
                                        <small><MdDateRange /> December 01, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/DidYouKnow" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className="swipersSlide">
                    <Card style={{ width: '18rem', border: 'none' }}  >
                        <Card.Img variant="top" src={Pic11} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Life of an Offshore Medic
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Kathy Price</small> <br />
                                        <small><MdDateRange /> December 01, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/Yvonnedb" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className="swipersSlide">
                    <Card style={{ width: '18rem', border: 'none' }}  >
                        <Card.Img variant="top" src={Pic11} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Life of an Offshore Medic
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Kathy Price</small> <br />
                                        <small><MdDateRange /> December 01, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/Yvonnedb" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </SwiperSlide>


            </Swiper>
            {/* <div class="swiper">
                <span slot="container-start">Container Start</span>
                <div class="swiper-wrapper">
                    <span slot="wrapper-start">Wrapper Start</span>
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <span slot="wrapper-end">Wrapper End</span>
                </div>
                <span slot="container-end">Container End</span>
            </div> */}
        </div>
    )
}
// function SlideNextButton() {

// }

export default RelatedPost