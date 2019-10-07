import React, { useState, useEffect } from 'react';
import './InfoIcon.css';

function Info(props) {
    const [visibility, Setvisibility] = useState({ visibility: "hidden" })
    const [ClickedForVisibilty, SetClickedForVisibilty] = useState(false)
    function HoverToshowIT() {
        Setvisibility({ visibility: "visible" })
    }
    function ClickedToShow() {
        SetClickedForVisibilty(true)
        Setvisibility({ visibility: "visible" })
    }
    function ClickedToClose() {
        SetClickedForVisibilty(false)
        Setvisibility({ visibility: "hidden" })
    }
    function hideIT() {
        if (ClickedForVisibilty === true) {
            Setvisibility({ visibility: "visible" })
        }
        Setvisibility({ visibility: "hidden" })
    }

    return (
        <div>
            <div className='infoWrapper'>
                <div className="bubble" style={visibility}>
                    <div className='infoContentWrapper'>
                        <div className='infoText'>hi</div>
                        <div className='CloseButton' onClick={ClickedToClose}>&#215;</div>
                    </div>
                </div>
                <div className='info' onClick={ClickedToShow} onMouseOver={HoverToshowIT} onMouseOut={hideIT}><i className="fas fa-ellipsis-h"></i></div>
            </div>
        </div>

    );
}

export default Info;