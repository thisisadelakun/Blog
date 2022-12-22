import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import '../Styles/OffCanvas.css'
import { VscSettingsGear } from 'react-icons/vsc'

const OffCanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeMenu = () => setShow(false)

    return (
        <div className='myoffcanvas'>
            <GiHamburgerMenu onClick={handleShow} style={{ color: "#DC143C", width: "30px", height: "30px", cursor: "pointer" }} />
            <Offcanvas show={show} onHide={handleClose} style={{ width: "60%" }}>
                <Offcanvas.Header className='myclosebutton'>
                    <Offcanvas.Title>                <div className="navars-branding">
                        < VscSettingsGear className='gear' />
                        <p className="navars-brandings">WomenIn<span className='un'>OIL</span></p>
                    </div></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="myclosebutton">
                    <div className='mycanvaslink'>
                        <ul className="mycanvaslinks">
                            <Link to='/'
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href='#my-main'>HOME</a></li>
                            </Link>
                            <Link to='/Blog'
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href="#myblog">BLOG</a></li>
                            </Link>

                            <Link to='/ABOUT'
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href="#my-works">ABOUT</a></li>
                            </Link>

                            <Link
                                onClick={() => closeMenu()} exact>
                                <li className='mynavsection'><a className='mynavsection' href="#footercontainer">CONTACT</a></li>
                            </Link>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
export default OffCanvas