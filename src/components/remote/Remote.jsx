import React, { useState } from 'react'
import './Remote.css'
const Remote = () => {

    const [temp, settemp] = useState(27)
    const [bgcol, setbgcol] = useState({ backgroundColor: 'orange' })

    const IncreaseTemp = () => {
        if (temp > 38) {
            setbgcol({ ...bgcol, backgroundColor: 'red' })
        } else if (temp > 16 && temp <= 38) {
            setbgcol({ ...bgcol, backgroundColor: 'orange' })
        }
        settemp(temp + 1)
    }
    const DecreaseTemp = () => {
        if (temp < 38 && temp >= 16) {
            setbgcol({ ...bgcol, backgroundColor: 'orange' })
        } else if (temp < 16) {
            setbgcol({ ...bgcol, backgroundColor: 'blue' })
        }
        settemp(temp - 1)
    }

    return (
        <>
            <h1>CONTROL YOUR A/C</h1>
            <div className='main-wrap'>

                <div className='r-wrap'>
                    <div style={bgcol} className='c-wrap'>
                        <p> {temp}&#8451;</p>
                    </div>
                    <div className='b-wrap'>
                        <div className='plus' onClick={() => {
                            IncreaseTemp()
                        }}>+</div>
                        <div className='minus' onClick={() => {
                            DecreaseTemp()
                        }}>-</div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Remote