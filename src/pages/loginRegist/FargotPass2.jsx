import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPass2 = () => {
    return (
        <div className='avtorizatsiya'>
            <div className="container log_con">
                <div className="row justify-content-center mb-5">
                    <Link className='text-pr section_title mb-2 text-center mt-3' to={'/'} >Edugately</Link>
                </div>
                <div className="row h-100">
                    <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
                        <img className=' d-none d-md-block' src={process.env.PUBLIC_URL + '/assets/log/login2.png'} alt="login" />
                    </div>
                    <div className="col-12 col-md-7 position-relative">
                        <div className="chiz"></div>
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2">
                                <form>
                                    <h2>You are only one step away from your new password, recover your password now.</h2>
                                    <div className="mt-3">
                                        <label htmlFor="pasword">SMS kod</label>
                                        <div className="log_inp">
                                            <input id='pasword' type="text" className="log_inp_in" placeholder='SMS orqali kelgan kodni kiriting' />
                                            <span>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.5">
                                                        <path d="M16.1566 6.80626V5.91251C16.1566 3.16251 14.0941 0.825009 11.4816 0.618759C10.0379 0.481259 8.59414 0.996884 7.52852 1.95938C6.46289 2.92188 5.84414 4.29688 5.84414 5.70626V6.80626C3.85039 7.18438 2.33789 8.93751 2.33789 11.0688V17.2906C2.33789 19.5594 4.19414 21.3813 6.42852 21.3813H15.5035C17.7723 21.3813 19.6285 19.525 19.6285 17.2563V11C19.6629 8.93751 18.1504 7.21876 16.1566 6.80626ZM8.55977 3.09376C9.31602 2.40626 10.3129 2.06251 11.3441 2.16563C13.166 2.33751 14.6098 3.98751 14.6098 5.91251V6.70313H7.39102V5.67188C7.39102 4.70938 7.80352 3.78126 8.55977 3.09376ZM18.116 17.2906C18.116 18.7 16.9473 19.8688 15.5379 19.8688H6.46289C5.05352 19.8688 3.91914 18.7344 3.91914 17.325V11.0688C3.91914 9.52188 5.15664 8.28438 6.70352 8.28438H15.2973C16.8441 8.28438 18.116 9.52188 18.116 11V17.2906Z" fill="#64748B" />
                                                        <path d="M11.0006 11.8594C10.5881 11.8594 10.21 12.2031 10.21 12.65V16.2594C10.21 16.6719 10.5537 17.05 11.0006 17.05C11.4131 17.05 11.7912 16.7063 11.7912 16.2594V12.6156C11.7912 12.2031 11.4131 11.8594 11.0006 11.8594Z" fill="#64748B" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="pasword">Password</label>
                                        <div className="log_inp">
                                            <input id='pasword' type="password" className="log_inp_in" placeholder='Enter your password' />
                                            <span>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.5">
                                                        <path d="M16.1566 6.80626V5.91251C16.1566 3.16251 14.0941 0.825009 11.4816 0.618759C10.0379 0.481259 8.59414 0.996884 7.52852 1.95938C6.46289 2.92188 5.84414 4.29688 5.84414 5.70626V6.80626C3.85039 7.18438 2.33789 8.93751 2.33789 11.0688V17.2906C2.33789 19.5594 4.19414 21.3813 6.42852 21.3813H15.5035C17.7723 21.3813 19.6285 19.525 19.6285 17.2563V11C19.6629 8.93751 18.1504 7.21876 16.1566 6.80626ZM8.55977 3.09376C9.31602 2.40626 10.3129 2.06251 11.3441 2.16563C13.166 2.33751 14.6098 3.98751 14.6098 5.91251V6.70313H7.39102V5.67188C7.39102 4.70938 7.80352 3.78126 8.55977 3.09376ZM18.116 17.2906C18.116 18.7 16.9473 19.8688 15.5379 19.8688H6.46289C5.05352 19.8688 3.91914 18.7344 3.91914 17.325V11.0688C3.91914 9.52188 5.15664 8.28438 6.70352 8.28438H15.2973C16.8441 8.28438 18.116 9.52188 18.116 11V17.2906Z" fill="#64748B" />
                                                        <path d="M11.0006 11.8594C10.5881 11.8594 10.21 12.2031 10.21 12.65V16.2594C10.21 16.6719 10.5537 17.05 11.0006 17.05C11.4131 17.05 11.7912 16.7063 11.7912 16.2594V12.6156C11.7912 12.2031 11.4131 11.8594 11.0006 11.8594Z" fill="#64748B" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="pasword">Retype password</label>
                                        <div className="log_inp">
                                            <input id='pasword' type="password" className="log_inp_in" placeholder='Enter your password' />
                                            <span>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.5">
                                                        <path d="M16.1566 6.80626V5.91251C16.1566 3.16251 14.0941 0.825009 11.4816 0.618759C10.0379 0.481259 8.59414 0.996884 7.52852 1.95938C6.46289 2.92188 5.84414 4.29688 5.84414 5.70626V6.80626C3.85039 7.18438 2.33789 8.93751 2.33789 11.0688V17.2906C2.33789 19.5594 4.19414 21.3813 6.42852 21.3813H15.5035C17.7723 21.3813 19.6285 19.525 19.6285 17.2563V11C19.6629 8.93751 18.1504 7.21876 16.1566 6.80626ZM8.55977 3.09376C9.31602 2.40626 10.3129 2.06251 11.3441 2.16563C13.166 2.33751 14.6098 3.98751 14.6098 5.91251V6.70313H7.39102V5.67188C7.39102 4.70938 7.80352 3.78126 8.55977 3.09376ZM18.116 17.2906C18.116 18.7 16.9473 19.8688 15.5379 19.8688H6.46289C5.05352 19.8688 3.91914 18.7344 3.91914 17.325V11.0688C3.91914 9.52188 5.15664 8.28438 6.70352 8.28438H15.2973C16.8441 8.28438 18.116 9.52188 18.116 11V17.2906Z" fill="#64748B" />
                                                        <path d="M11.0006 11.8594C10.5881 11.8594 10.21 12.2031 10.21 12.65V16.2594C10.21 16.6719 10.5537 17.05 11.0006 17.05C11.4131 17.05 11.7912 16.7063 11.7912 16.2594V12.6156C11.7912 12.2031 11.4131 11.8594 11.0006 11.8594Z" fill="#64748B" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <button className='btn btn-primary w-100 py-3 mt-5'>Request new password</button>

                                </form>
                            </div>
                            <div className="col-8 offset-2 mt-3">
                                <Link className='d-block text-pr' to={'/login'} > Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass2