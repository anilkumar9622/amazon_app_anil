import React from 'react'
import Icon, { MenuOutlined } from '@ant-design/icons';
import Drawer1 from '../../../sidemenu/drawer1';
import Popover1 from './popover';

// import Image3 from '../../image/amazon.png'
export default function Header1() {

    return ( 
   

        <div style={{ backgroundColor: '#232f3e', width: '100%', height: '40px', display: 'flex', justifyContent:'center', flexWrap:'wrap' }}>
            <div style={{width:'120%',flexDirection:'row', backgroundColor: '#232f3e', width: '70%', height: '100%', display: 'flex',alignItems:'center',justifyContent:'space-between' ,fontSize: '15px', paddingLeft: '20px' }}>
               
                <Drawer1 />
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="./echoBulb" class="ex1" style={{ color: 'white',display: 'flex', justifyContent: 'space-around' }}>
                        Best seller
                    </a>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="./Popapp1" class="ex1" style={{ color: 'white',display: 'flex', justifyContent: 'space-around' }}>
                        Mobile
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Customer Service
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Today's Deals
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Fashion
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Electronics
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Prime
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        New Release
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Home & Kitchen
                    </a>
                </div>
            </div>

            <div style={{ backgroundColor: '#232f3e', width: '30%', display: 'flex', height: '100%', justifyContent: 'center' }}>

                {/* <img style={{ display: 'flex', justifyContent: 'space-around', height: '100%', width: '10%' }} src={''} /> */}
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.2vw', alignItems: 'center', color: 'white' }}>Shopping made easy | Download the app</div>

            </div>
            
        </div>
        )
}

