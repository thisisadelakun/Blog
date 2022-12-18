import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <div className='footercontainer'>
            <footer className=" text-center">
                <div className="container p-4 pb-0">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form5Example27" className="form-control" />
                                        <label className="form-label" for="form5Example27">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-danger mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="text-center p-3">
                                © 2020 WomenIn OIL World All right Reserved.
                            </div>
                        </form>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer