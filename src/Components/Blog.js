import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pic11 from '../Assets/Yvonne2.jpeg'
import { MdDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom';
import '../Styles/Blog.css'
import Oilfield2 from '../Assets/Oil-fields.jpg'
import Oilfield3 from '../Assets/metal-drilling-drilling-rig-oil.jpg'
import Oilfield4 from '../Assets/mesh-833.png'
import Oilfield5 from '../Assets/Oilfield dusk.jpg'
import Oilfield6 from '../Assets/refinery-pump-dryland.jpg'
import Oilfield7 from '../Assets/oilplant2.jpg'



const Blog = () => {
    return (
        <div className='myblog' id='myblog'>
            <div className='headeryvonnetext3'>
                <h1 className='women2'>Welcome</h1>
                <h1 className='women2'>to our</h1>
                <h2 className='research2'>Blog Post</h2>
            </div>
            <div className='allcardblog'>

                <div className='cardblog' class="shadow mb-5 bg-white rounded">
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
                </div>


                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={Oilfield2} width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Did you know?
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Mattew Joe</small> <br />
                                        <small><MdDateRange /> October 31, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/DidYouKnow" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>


                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={Oilfield3} width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Top 20 Countries With Oil
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Fahem Saleem</small> <br />
                                        <small><MdDateRange /> October 23, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>


                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={Oilfield5} width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Vietnam Valley
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Ahmad Ashraf</small> <br />
                                        <small><MdDateRange /> December 23, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={Oilfield7} width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    The West and Gas
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Carl Dawson</small> <br />
                                        <small><MdDateRange /> December 31, 2021</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={Oilfield6} width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Africa Frontier
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Nuhu Jabir</small> <br />
                                        <small><MdDateRange /> June 30, 2021 </small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={{Oilfield4}} width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    The Oil Rig
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Sofian Nadenne</small> <br />
                                        <small><MdDateRange /> January 16, 2022 </small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src="holder.js/100px180" width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Surviving Oil Spillage
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Roman Saiss</small> <br />
                                        <small><MdDateRange /> June 26, 2022 </small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src="holder.js/100px180" width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    The European Crude Oil at its Peak
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Alfred Gavi</small> <br />
                                        <small><MdDateRange /> May 16, 2020 </small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src="holder.js/100px180" width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Guarding the Pipeline
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Napoleon Lenns</small> <br />
                                        <small><MdDateRange /> March 22, 2022 </small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src="holder.js/100px180" width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    In the Middle East
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Raheem Ahmed</small> <br />
                                        <small><MdDateRange /> July 20, 2019 </small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog' class="shadow mb-5 bg-white rounded">
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={Oilfield4} width={300} height={200} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Acient Crude Oil
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Lola Hendrick</small> <br />
                                        <small><MdDateRange /> June 26, 2020 </small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/" >
                                <Button style={{ width: '8rem', backgroundColor: 'crimson', fontSize: '13px' }} className='readbutton' variant="danger">Read here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                {/* <div className='cardblog'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div> */}
            </div>

            <div className="acknwoledgement">
                <div className="acknowledge">
                    <h3 className="acknowledgeh3">ACKNOWLEDGEMENT</h3>
                    <p className="acknowledgep">
                        Women in Oil World acknowledges the whole teams and people of the many traditional lands and language across the Globe. We acknowledge the wisdom of Elders both past and present, and pay respect to the communities of today. We recognise and appreciates their continuing sharing of knwoledges in order to serve the Industry well.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blog