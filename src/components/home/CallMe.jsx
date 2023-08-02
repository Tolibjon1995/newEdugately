import React from 'react'
import InputMask from "react-input-mask";

const CallMe = () => {
    return (
        <div className='container-fluid max-width px-6  callMe'>
            <div className='row'>
                <div className="col-12">
                    <h1 className='text-pr section_title'>
                        Leave your number and we’ll call you back
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="row">
                                <div className="col-6">
                                    <img src="" alt="" />
                                </div>
                                <div className="col-6">
                                    <form >
                                        <InputMask
                                            mask="+\9\98 (99) 999-99-99"
                                            className="form-control"
                                            placeholder="+998-123-45-67"
                                            type="text"
                                            
                                        />
                                        <button>Confirm</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallMe