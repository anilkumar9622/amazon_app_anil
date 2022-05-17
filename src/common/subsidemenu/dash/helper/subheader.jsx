import React from 'react'
import 'antd/dist/antd.css';
// import './index.css';
import './subheader.css'
import { Tooltip, Button } from 'antd';
import Popover1 from './popover';
export default function Subheader() {

    const text1 = <span ><h3 style={{ paddingLeft: '10px' }}>Echo & Alexa</h3>


        <td>
            <tr>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61lv4nv5VdL._SX466_.jpg"
                        style={{ height: '150px', width: '164px', alignItems: '', paddingLeft: '20px' }} alt='img' />
                </div></tr>
            <div style={{ padding: '16px 24px', fontSize: '16px', alignItems: 'center', justifyContent: 'center' }}>
                <tr >
                    Echo Dot</tr>

                <tr>Compact smart speaker </tr>

                <tr>₹3,499.00</tr>
                <tr>M.R.P.: ₹4,499.00</tr>
            </div>
        </td>
            <td>
                <div>
                    <video src="https://m.media-amazon.com/images/G/31/img19/AmazonDevices/EchoDot/91n9Ufsnu0S._CB448390492_"
                        style={{ height: '150px', width: '364px', alignItems: 'center', marginBottom: '10px', padding:'0px' }}  ></video>
                </div>
            <div style={{ padding: '16px 110px', fontSize: '16px', alignItems: 'center', justifyContent: 'center' }}>
                <tr >
                    NEW All-new Echo</tr>

                <tr>Premium sound powered by <tr>Dolby and Alexa</tr> </tr>
                <tr>₹6,999.00</tr>
                <tr>M.R.P.: ₹9,999.00</tr>
            </div>
            </td>
        


    </span>;
    const text2 = <span ><h3 style={{ paddingLeft: '10px' }}>Fire TV</h3></span>;
    const text3 = <span ><h3 style={{ paddingLeft: '10px' }}> Kindle</h3></span>;
    const text4 = <span ><h3 style={{ paddingLeft: '10px' }}>Smart Home</h3></span>;
    const text5 = <span ><h3 style={{ paddingLeft: '10px' }}>Certified Refurbished</h3></span>;
    const buttonWidth = 0;
    return (
        <>

            <div style={{borderBottom: '1px #ddd solid', backgroundColor: '#f3f3f3', width: '100%', height: '40px', display: 'flex', width: '100%', flexWrap: 'wrap', }}>
                <div style={{ backgroundColor: '#f3f3f3', width: '70%', height: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '15px', paddingLeft: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.1vw', color: '', paddingTop: '5px' }}>
                        <a href="" class="ex2" style={{ color: 'black' }} >
                            <h3>Amazon Devices</h3>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }}>
                            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                                <Tooltip placement="bottom" title={text1}>
                                    Echo & Alexa
                                </Tooltip></div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }}>
                            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                                <Tooltip placement="bottom" title={text2}>
                                    Fire TV
                                </Tooltip></div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }}>
                            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                                <Tooltip placement="bottom" title={text3}>
                                    Kindle
                                </Tooltip></div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }} >
                            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                                <Tooltip placement="bottom" title={text4}>
                                    Smart Home
                                </Tooltip></div>

                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '' }}>
                        <a href="" class="ex2" style={{ color: 'black' }} >
                            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                                <Tooltip placement="bottom" title={text5}>
                                    Certified Refurbished
                                </Tooltip></div>

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
