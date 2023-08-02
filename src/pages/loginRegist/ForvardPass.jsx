import React from 'react'
import { Link } from 'react-router-dom'

const ForvardPass = () => {
    return (
        <div className='avtorizatsiya'>
            <div className="container log_con">
                <div className="row justify-content-center mb-5">
                    <Link className='text-pr section_title mb-2 text-center mt-3' to={'/'} >Edugately</Link>
                </div>
                <div className="row h-100">
                    <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
                        <img className=' d-none d-md-block' src={process.env.PUBLIC_URL + '/assets/log/login.png'} alt="login" />
                    </div>
                    <div className="col-12 col-md-7 position-relative">
                        <div className="chiz"></div>
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2">
                                <form>
                                    <h2>You forgot your password? Here you can easily retrieve a new password</h2>
                                    <div className="mt-3">
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="log_inp">
                                            <input id='phone' type="text" className="log_inp_in" placeholder='Enter your phone number' autoFocus />
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#B1B9C5" stroke-width="1.5" stroke-linecap="round" />
                                                </svg>

                                            </span>
                                        </div>
                                    </div>

                                    <button className='btn btn-primary w-100 py-3 mt-5'>Request new password</button>

                                </form>
                            </div>
                            <div className="col-8 offset-2 mt-3">
                                <Link className='d-block text-pr' to={'/login'} > Log in</Link>
                                <Link className='d-block text-pr' to={'/registr'} >Register a new membership</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForvardPass