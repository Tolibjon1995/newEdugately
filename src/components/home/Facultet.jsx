import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Facultet = () => {
    const { t } = useTranslation();
    let data = [
        {
            image: '/assets/facultet/1.png',
            title: 'Russian language',
            bgColor: '#6EA0FD33'
        },
        {
            image: '/assets/facultet/2.png',
            title: 'Business management',
            bgColor: '#6EF5D833'
        },
        {
            image: '/assets/facultet/3.png',
            title: 'Hotel business',
            bgColor: '#C954EF33'
        },
        {
            image: '/assets/facultet/4.png',
            title: 'IT',
            bgColor: '#F0ADC033'
        },
        {
            image: '/assets/facultet/5.png',
            title: 'Finance',
            bgColor: '#6EA0FD33'
        },
        {
            image: '/assets/facultet/6.png',
            title: 'Diplomacy',
            bgColor: '#6EF5D833'
        },
        {
            image: '/assets/facultet/7.png',
            title: 'Literature ',
            bgColor: '#C954EF33'
        },
        {
            image: '/assets/facultet/8.png',
            title: 'Medicine',
            bgColor: '#F0ADC033'
        }
    ]
    return (
        <div className='facultet py-6'>
            <div className='container-fluid max-width px-6'>
                <div className='row carus'>
                    <div className="col-12">
                        <h1 className='text-pr section_title mb-2'>
                            The most popular
                        </h1>
                        <p className='text-center'>
                            Know more about us and our services. Join us and we will ensure you get a proper faculty facility.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        data?.map((item, index) => {
                            return (
                                <div key={index} className='col-12 col-md-6 col-lg-3'>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="img-cirkl" style={{ background: item.bgColor }}>
                                                <img src={process.env.PUBLIC_URL + item.image} alt="" />
                                            </div>
                                            <p>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <Link to={'/'} className="btn-header">
                        {t('header3')}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Facultet