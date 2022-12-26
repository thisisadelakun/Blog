import React from 'react'
import '../Styles/Footer.css'
import { BsArrowUpCircle } from 'react-icons/bs'
import Form from 'react-bootstrap/Form';

const Footer = () => {
    return (
        <div className='footercontainer' id='footercontainer'>
            <footer className=" text-center">
                <Form className='formscontainer mt-3'>
                    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control className="mb-3 " type="name" placeholder="Full Name" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <div className="container p-4 pb-0">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <p className="pt-2">
                                        <strong className='strongsignup'>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form5Example27" className="form-control" />
                                        <label className="form-label" for="form5Example27">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto  subscribefooter">
                                    <button type="submit" className="btn btn-danger mb-4 subscribefooter">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="text-center p-3 c2020">
                                © 2020 WomenIn OIL World All right Reserved.
                            </div>
                        </form>
                    </section>
                    <a className='gotops' href="#top"><BsArrowUpCircle /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer