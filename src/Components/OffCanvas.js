import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import '../Styles/OffCanvas.css'

const OffCanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeMenu = () => setShow(false)

    return (
        <div className='myoffcanvas'>
            <GiHamburgerMenu onClick={handleShow} style={{ color: "#DC143C", width: "30px", height: "30px", cursor: "pointer" }} />
            <Offcanvas show={show} onHide={handleClose} style={{ width: "60%" }}>
                <Offcanvas.Header className='myclosebutton' closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="myclosebutton">
                    <div className='mycanvaslink'>
                        <ul className="mycanvaslinks">
                            <Link to='/'
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href="#about">Home</a></li>
                            </Link>
                            <Link to='/'
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href="#about">About</a></li>
                            </Link>

                            <Link to='/'
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href="#my-works">Portfolio</a></li>
                            </Link>

                            <Link to='/'
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href="#contact-me">Contact</a></li>
                            </Link>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
export default OffCanvas