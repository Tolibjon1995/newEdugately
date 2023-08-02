import React from 'react'
import { useEffect } from 'react'

const Counter = () => {
    useEffect(() => {

    }, [])
    
    return (
        <>
            <div className="container-fluid max-width px-6">
                <div className='row'>
                    <div className="col-12">
                        <h1 className='section_title text-pr '>
                            Achievements
                        </h1>
                    </div>
                </div>
            </div>
            <div className="counter">
                <div className="container-fluid max-width px-6">
                    <div className="row">
                        <div className="col-12 col-md-3 mb-5 mb-lg-0">
                            <h1 className='text-white text-center'>Achievements</h1>
                            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3 info-cart mt-3 mt-lg-0">
                                    <div className="card">
                                        <div className="card-header border-0 d-flex justify-content-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/Ellipse 11.png'} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <p>More than</p>
                                            <h1>1000+</h1>
                                            <p>applicants became students</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 info-cart mt-3 mt-lg-0">
                                    <div className="card">
                                        <div className="card-header border-0 d-flex justify-content-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/Ellipse 15.png'} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <p>More than</p>
                                            <h1>20+</h1>
                                            <p>universities around the world</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 info-cart mt-3 mt-lg-0">
                                    <div className="card">
                                        <div className="card-header border-0 d-flex justify-content-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/Ellipse 16.png'} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <p>More than</p>
                                            <h1>300</h1>
                                            <p>faculties to choose </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 info-cart mt-3 mt-lg-0">
                                    <div className="card">
                                        <div className="card-header border-0 d-flex justify-content-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/Ellipse 17.png'} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <p>More than</p>
                                            <h1>20</h1>
                                            <p>scholarships to win</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter