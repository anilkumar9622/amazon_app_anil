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
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/GW/July/3000x1200_1._CB633091933_.jpg" style={contentStyle} alt=''/> 
    </div>
    <div>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/July/ATF/EOSS-GW-PC-Bunkjy._CB633088990_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/July/GW/Weights/V1/3000x1200_1._CB633252119_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April-22/DesktopTallhero_3000x1200_2._CB623843558_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/July/GW/Unrec_DesktopTallHero_3000x1200._CB632976086_.jpg" style={contentStyle} alt=''/>
    </div>
    <div>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PFS_Unrechero/D50756151_WLA_GW_Heroes_Unrec__Tall_Hero_3000x1200._CB632954420_.jpg" style={contentStyle} alt=''/>
    </div>
    {/* <div>
    <img src="https://m.media-amazon.com/images/I/71XH8AdrcOL._SX3000_.jpg" style={contentStyle} alt=''/>
    </div> */}
    <div>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" style={contentStyle} alt=''/>
    </div>
  </Carousel>

    </>
  )
}
