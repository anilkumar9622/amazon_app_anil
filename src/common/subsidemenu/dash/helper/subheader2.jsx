import React from 'react'
import 'antd/dist/antd.css';
// import './index.css';
import './subheader.css'
import { Tooltip, Button } from 'antd';

export default function Subheader2() {

  
    return (
        <>

            <div style={{borderBottom: '1px #ddd solid', backgroundColor: '#f3f3f3', width: '100%', height: '35px', display: 'flex', width: '100%', flexWrap: 'wrap', }}>
                <div style={{ backgroundColor: '#f3f3f3', width: '70%', height: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '10px', paddingLeft: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.1vw', color: '', paddingTop: '5px' , paddingLeft:'6px'}}>
                        <a href="" class="ex2" style={{ color: 'black' }} >
                            <h3>Amazon Devices</h3>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }}>
                            <div style={{ marginLeft: '28px', whiteSpace: 'nowrap' }}>
                                    Echo & Alexa
                                </div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }}>
                            <div style={{ marginLeft: '28px', whiteSpace: 'nowrap' }}>
                                    Fire TV
                                </div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }}>
                            <div style={{ marginLeft: '28px', whiteSpace: 'nowrap' }}>
                                    Kindle
                                </div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }} >
                            <div style={{ marginLeft: '28px', whiteSpace: 'nowrap' }}>
                                    Smart Home
                                </div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }} >
                            <div style={{ marginLeft: '28px', whiteSpace: 'nowrap' }}>
                                    Certified Refurbished
                              </div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }} >
                            Devices for Corporate
                        </a>
                    </div>
                </div>
            </div>
           
        </>
    )
}
