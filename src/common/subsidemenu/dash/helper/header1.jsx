import React from 'react'
import Icon, { MenuOutlined } from '@ant-design/icons';
import Drawer1 from '../../../sidemenu/drawer1';
import Popover1 from './popover';
import { Link } from 'react-router-dom';


// import Image3 from '../../image/Linkmazon.png'
export default function Header1() {

    return ( 
   

        <div style={{ backgroundColor: '#232f3e', width: '100%', height: '40px', display: 'flex', justifyContent:'center', flexWrap:'wrap' }}>
            <div style={{width:'120%',flexDirection:'row', backgroundColor: '#232f3e', width: '70%', height: '100%', display: 'flex',alignItems:'center',justifyContent:'space-between' ,fontSize: '15px', paddingLeft: '20px' }}>
               
                <Drawer1 />
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="./echoBulb" class="ex1" style={{ color: 'white',display: 'flex', justifyContent: 'space-around' }}>
                        Best seller
                    </Link>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="./Popapp1" class="ex1" style={{ color: 'white',display: 'flex', justifyContent: 'space-around' }}>
                        Mobile
                    </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="" class="ex1" style={{ color: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Customer Service
                    </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Today's Deals
                    </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Fashion
                    </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link  to="./electronics" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Electronics
                    </Link>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Prime
                    </Link>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        New Release
                    </Link>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <Link to="" class="ex1" style={{ color: 'white' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        Home & Kitchen
                    </Link>
                </div>
            </div>

            <div style={{ backgroundColor: '#232f3e', width: '30%', display: 'flex', height: '100%', justifyContent: 'center' }}>

                {/* <img style={{ display: 'flex', justifyContent: 'space-around', height: '100%', width: '10%' }} src={''} /> */}
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.2vw', alignItems: 'center', color: 'white' }}>Shopping made easy | Download the app</div>

            </div>
            
        </div>
        )
}

