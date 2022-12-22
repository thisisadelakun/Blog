import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pic33 from '../Assets/Yvonne3.jpeg'
import { MdDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom';
import '../Styles/Blog.css'

const Blog = () => {
    return (
        <div className='myblog' id='myblog'>
            <div className='allcardblog'>
                <div className='cardblog'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img  variant="top" src={Pic33} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className='blogh3'>
                                    Life of an Offshore Medic
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <div className="dateandwriterblog">
                                        <small>by Yvonne Weidman</small> <br />
                                        <small><MdDateRange /> December 01, 2022</small>
                                    </div>
                                </div>
                            </Card.Text>
                            <Link to="/Yvonnedb" >
                                <Button className='readbutton' variant="danger">Read here</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardblog'>
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
                </div>
                <div className='cardblog'>
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

        </div>
    )
}

export default Blog