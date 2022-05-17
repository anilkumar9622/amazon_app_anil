import { Carousel } from 'antd'
import React from 'react'

export default function Carousel1() {
    const contentStyle = {
        height: '600px',
        width:'100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        marginTop: '0px',

      };
  return (
    <>
     <Carousel autoplay>
    <div >
      <img src="https://m.media-amazon.com/images/I/61daRWTgOtL._SX3000_.jpg" style={contentStyle} alt=''/> 
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/61sx-qxyECL._SX3000_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/61oxi2NU2PL._SX3000_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/61MECemNcuL._SX3000_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/61Qi5GMxgNL._SX3000_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/61guziP8c+L._SX3000_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/71XH8AdrcOL._SX3000_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/61fmUhLFFlL._SX3000_.jpg" style={contentStyle} alt=''/>
    </div>
  </Carousel>

    </>
  )
}
