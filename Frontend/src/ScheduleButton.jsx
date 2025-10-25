import React, { useState } from 'react';

function ScheduleButton() {
   
    const [isON, setIsON] = useState(true);

    const switchONOFF = () => {
        setIsON(!isON);
    }

    const stylee={
        display:'flex',
        width:'96px',
        height:'40px',
        borderRadius:'50px',
        cursor:'pointer'

    }
    // const button1={
    //     width:'1px',
    //     height:'40px',
    //     backgroundColor: isON ? '#D9D9D9' : '#FFFFFF',
    //     border: 'black 1px solid',
    //      borderTopLeftRadius: '50%',
    //       borderBottomLeftRadius: '50%',
    // }

    // const button2={
    //     width:'1px',
    //     height:'40px',
    //     backgroundColor: isON ? '#0C53EC' : '#D9D9D9',
    //     border: 'black 1px solid',
    //     borderTopRightRadius: '50%',
    //     borderBottomRightRadius: '50%',
    // }

    return(
        <div className='tomato' style={stylee} onClick={switchONOFF}>
            <div style={{backgroundColor: isON ? '#FFFFFF' : '#D9D9D9'}} className='button1'>
                
            </div>

            <div style={{backgroundColor: isON ? '#0C53EC' : '#FFFFFF'}} className='button2'>

            </div>
        </div>
    )
}

export default ScheduleButton;