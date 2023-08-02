import React from 'react'
import { Link } from 'react-router-dom'

const Registratsiya = () => {
  return (
    <div className='avtorizatsiya'>
      <div className="container log_con">
        <div className="row justify-content-center">
          <Link className='text-pr section_title mb-2 text-center mt-3' to={'/'} >Edugately</Link>
        </div>
        <div className="row h-100">
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
            <img className=' d-none d-md-block' src={process.env.PUBLIC_URL + '/assets/log/login.png'} alt="login" />
          </div>
          <div className="col-12 col-md-7  form position-relative">
            <div className="chiz"></div>
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2">
                <form>
                  <h2>Sign in to start your session</h2>

                  <div className="mt-3">
                    <label htmlFor="name">Enter your full name</label>
                    <div className="log_inp">
                      <input id='name' type="text" className="log_inp_in" placeholder='Azizova Nafisa' autoFocus />
                      <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10.0003" cy="4.99996" r="3.33333" stroke="#8390A2" stroke-width="1.5" />
                          <path d="M16.6663 14.5834C16.6663 16.6544 16.6663 18.3334 9.99967 18.3334C3.33301 18.3334 3.33301 16.6544 3.33301 14.5834C3.33301 12.5123 6.31778 10.8334 9.99967 10.8334C13.6816 10.8334 16.6663 12.5123 16.6663 14.5834Z" stroke="#8390A2" stroke-width="1.5" />
                        </svg>

                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="phone">Phone number</label>
                    <div className="log_inp">
                      <input id='phone' type="text" className="log_inp_in" placeholder='Enter your phone number'  />
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#B1B9C5" stroke-width="1.5" stroke-linecap="round" />
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
                  <div className="mt-3">
                    <div class="form-check align-items-center">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label ms-2" for="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button className='btn btn-primary w-100 py-3 mt-5'>Sign in</button>

                  <button type="button" class="btn btn-login mt-3 py-3">
                    <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_257_1778)">
                        <path d="M20 10.2217C20.0121 9.53428 19.9397 8.84788 19.7844 8.17737H10.2041V11.8884H15.8276C15.7211 12.5391 15.4814 13.162 15.1229 13.7195C14.7644 14.2771 14.2945 14.7578 13.7415 15.1328L13.7219 15.2571L16.7512 17.5568L16.9609 17.5774C18.8883 15.8329 19.9996 13.2661 19.9996 10.2217" fill="#4285F4" />
                        <path d="M10.2045 19.9999C12.9595 19.9999 15.2724 19.111 16.9619 17.5777L13.7419 15.1331C12.8803 15.7221 11.7239 16.1333 10.2045 16.1333C8.91415 16.1259 7.65893 15.7205 6.61694 14.9745C5.57494 14.2286 4.79909 13.1801 4.39946 11.9777L4.27987 11.9877L1.13004 14.3765L1.08887 14.4887C1.9372 16.1456 3.2391 17.5386 4.84899 18.5118C6.45889 19.4851 8.31332 20.0004 10.2049 19.9999" fill="#34A853" />
                        <path d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z" fill="#FBBC05" />
                        <path d="M10.2039 3.86663C11.6661 3.84438 13.0802 4.37803 14.1495 5.35558L17.0294 2.59996C15.1823 0.901848 12.7364 -0.0298855 10.2039 -3.6784e-05C8.31236 -0.000477834 6.45795 0.514732 4.84805 1.48798C3.23816 2.46124 1.93625 3.85416 1.08789 5.51101L4.3875 8.02225C4.79107 6.82005 5.5695 5.77231 6.61303 5.02675C7.65655 4.28118 8.91255 3.87541 10.2039 3.86663Z" fill="#EB4335" />
                      </g>
                      <defs>
                        <clipPath id="clip0_257_1778">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Sign in with Google
                  </button>
                  <button type="button" class="btn btn-login mt-3 py-3">
                    <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <g clip-path="url(#clip0_257_1802)">
                        <path d="M21 10.5C21 4.70105 16.299 0 10.5 0C4.70105 0 0 4.70096 0 10.5C0 15.7408 3.83972 20.0848 8.85938 20.8724V13.5352H6.19336V10.5H8.85938V8.18672C8.85938 5.55516 10.427 4.10156 12.8253 4.10156C13.9742 4.10156 15.1758 4.30664 15.1758 4.30664V6.89062H13.8518C12.5473 6.89062 12.1406 7.70003 12.1406 8.53043V10.5H15.0527L14.5872 13.5352H12.1406V20.8724C17.1603 20.0848 21 15.7409 21 10.5Z" fill="#1877F2" />
                        <path d="M14.5872 13.5352L15.0527 10.5H12.1406V8.53043C12.1406 7.69995 12.5474 6.89062 13.8518 6.89062H15.1758V4.30664C15.1758 4.30664 13.9742 4.10156 12.8253 4.10156C10.427 4.10156 8.85938 5.55516 8.85938 8.18672V10.5H6.19336V13.5352H8.85938V20.8724C9.40211 20.9575 9.95064 21.0001 10.5 21C11.0494 21.0002 11.5979 20.9575 12.1406 20.8724V13.5352H14.5872Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_257_1802">
                          <rect width="21" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Sign in with Facebook
                  </button>
                  <button type="button" class="btn btn-login mt-3 py-3">
                    <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <g clip-path="url(#clip0_257_1814)">
                        <path d="M10.5 0C7.71586 0 5.04328 1.10693 3.07617 3.07535C1.10703 5.04455 0.000545458 7.71517 0 10.5C0 13.2836 1.10742 15.9562 3.07617 17.9246C5.04328 19.8931 7.71586 21 10.5 21C13.2841 21 15.9567 19.8931 17.9238 17.9246C19.8926 15.9562 21 13.2836 21 10.5C21 7.71635 19.8926 5.04377 17.9238 3.07535C15.9567 1.10693 13.2841 0 10.5 0Z" fill="url(#paint0_linear_257_1814)" />
                        <path d="M4.7525 10.389C7.8139 9.05554 9.85484 8.17633 10.8753 7.75157C13.7923 6.53866 14.3977 6.328 14.7931 6.32086C14.8801 6.31947 15.0737 6.34096 15.2 6.44309C15.305 6.52922 15.3345 6.64571 15.3493 6.72749C15.3624 6.8092 15.3805 6.99541 15.3657 7.14077C15.2082 8.80108 14.5241 12.8301 14.1762 14.6898C14.0302 15.4766 13.7398 15.7404 13.4593 15.7662C12.849 15.8223 12.3863 15.3632 11.7957 14.9762C10.872 14.3703 10.3503 13.9933 9.45289 13.4022C8.41601 12.7191 9.08867 12.3435 9.67929 11.7299C9.83351 11.5693 12.5209 9.12559 12.5717 8.90394C12.5783 8.87622 12.5848 8.77286 12.5225 8.71839C12.4618 8.66376 12.3716 8.68246 12.3059 8.69723C12.2124 8.71823 10.7375 9.69407 7.87625 11.6246C7.45789 11.9124 7.0789 12.0526 6.73765 12.0452C6.36359 12.0372 5.64172 11.8333 5.10523 11.659C4.44898 11.4453 3.92562 11.3322 3.97156 10.9692C3.99453 10.7802 4.25539 10.5867 4.7525 10.389Z" fill="white" />
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_257_1814" x1="1050" y1="0" x2="1050" y2="2100" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#2AABEE" />
                          <stop offset="1" stop-color="#229ED9" />
                        </linearGradient>
                        <clipPath id="clip0_257_1814">
                          <rect width="21" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Sign in with Telegram
                  </button>
                </form>
              </div>
              <div className="col-8 offset-2 mt-3">
                <Link className='d-block text-pr' to={'/forgotPass'} > I forgot my password</Link>
                {/* <Link className='d-block text-pr' to={'/'} >Register a new membership</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Registratsiya