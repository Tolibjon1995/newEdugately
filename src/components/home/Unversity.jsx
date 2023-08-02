import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Unversity = () => {
    const [unversity, setUnversity] = useState([])
    useEffect(() => {
        axios.get(`https://backend.edugately.com/api/v1/university/?limit=8`).then((res) => {
            console.log(res.data.results);
            setUnversity(res.data.results);
        })
    }, [])

    return (
        <div className="container-fluid max-width px-6">
            <div className='row'>
                <div className="col-12">
                    <h1 className='section_title text-pr '>
                        University Partners
                    </h1>
                </div>
            </div>
            <div className="row unversity">
                {
                    unversity?.map((item, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-3 px-5 ">
                                <div className="card">
                                    <div className="container_images">
                                        <img src={item?.icon} alt="" />
                                    </div>
                                    <div className="p">
                                        <p>{item?.name}</p>
                                    </div>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="332" height="185" viewBox="0 0 332 185" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M112.146 0.360352H32C14.3269 0.360352 0 14.6872 0 32.3604V152.36C0 170.033 14.3269 184.36 32 184.36H300C317.673 184.36 332 170.033 332 152.36V32.3604C332 14.6872 317.673 0.360352 300 0.360352H218.972C218.486 29.4443 194.758 52.8717 165.559 52.8717C136.359 52.8717 112.631 29.4443 112.146 0.360352Z" fill="white" />
                                    </svg> */}
                                </div>

                            </div>
                        )
                    })
                }
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <button className="btn-unver">
                                See all
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Unversity