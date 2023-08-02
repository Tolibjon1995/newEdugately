import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Header = () => {
    const { t } = useTranslation();
    return (
        <div className='container-fluid max-width px-6'>
            <div className='row heder'>
                <div className="col-12 col-md-6">
                    <h1 className=' text-start section_title'>
                        {t('header1')}
                    </h1>
                    <p className='text-pr'>
                        {t('header2')}
                    </p>
                    <Link to={'/'} className="btn-header">
                        {t('header3')}
                    </Link>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                    <img className='w-100 mt-5 mt-md-0' src={process.env.PUBLIC_URL + '/assets/header1.png'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header

