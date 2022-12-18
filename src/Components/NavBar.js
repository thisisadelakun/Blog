import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Styles/NavBar.css'
import { VscSettingsGear } from 'react-icons/vsc'
import OffCanvas from './OffCanvas';



const NavBar = () => {

    return (
        <div className='navbarcontents'>
            <div className="navbarcontainers">
                <div className='mycanvas'>
                    <OffCanvas />
                </div>
                <div className="navars-branding">
                    < VscSettingsGear className='gear' />
                    <p className="navars-brandings">WomenIn<span className='un'>OIL</span></p>
                </div>
                <div className='navcontainers'>
                    <Nav className='navcontainer' as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/Home"><span className="navslink">HOME</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href='/Blog' eventKey="link-1"><span className="navslink">BLOG</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href='/About' eventKey="link-2"><span className="navslink">ABOUT</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href='/Contact' eventKey="link-2"><span className="navslink">CONTACT</span></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className='navbtn'>
                    <button className='navbtninput'>
                        <input className='navbtninputs' type="button" value="Subscribe Now" />
                    </button>
                    {/* <OffCanvas/> */}
                </div>
            </div>
        </div>
    );
}

export default NavBar