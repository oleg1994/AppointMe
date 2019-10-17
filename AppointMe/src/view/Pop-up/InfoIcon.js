import React, { useState } from 'react';
import './InfoIcon.css';
import { useStateValue } from '../../Context/state';
import { Link } from 'react-router-dom';




function Info() {
    const [upState, dispatchupState] = useStateValue();
    const [state, setstate] = useState('initialState')

    function clicktoContinue() {
        dispatchupState({
            type: 'popUp',
            payload: { status: false,message:'' }  //payload
        })
    }
    return (

        <div className='containerPopUp'>
            {upState.popUp.status ?
                <div className='containerInfo'>
                    <div className='infoWrapper' >
                        <div className="bubble">
                            <div className='infoContentWrapper'>
                                <div className='infoText'>{upState.popUp.message}</div>
                                <div className='afterRegister'><Link to={upState.popUp.url} className='OrangeButton' onClick={clicktoContinue}>continue</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div />

            }
        </div>

    );
}

export default Info;