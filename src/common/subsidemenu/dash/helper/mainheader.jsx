import React, { useEffect, useState } from 'react'
import { Input, List } from 'antd';
import 'antd/dist/antd.css';
import './Style.css'
import { CaretDownOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons'
import { AudioOutlined } from '@ant-design/icons';
// import Image3 from './image/amazon.png'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Cascader } from 'antd';
import Popover from './popover';
import SigninPopover from './siginPopover';
import SigninPopAuth from './signinPopAuth';
import Tooltip1 from './tooltip';
import LanguagePopover from './languagePopover';
import EchoBulb from '../../pages/echoBulb';
import { useSelector, useDispatch } from 'react-redux';
import Popover1 from './popover';
// import CardView from '../../../Cart/cartView';
import { cart, fetchCartItems } from '../../../Redux/cartReducerCumActions';
import ModalView from './popmodal';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function Mainheader() {
    
    const [deliver, setDeliver] = useState(true)
    const [toggle, settoggle] = useState(null)
    const [toggle2, settoggle2] = useState(null)
    const [cartValue, setCartValue] = useState(0)
  console.log("DDDDvalue",cartValue)
    const { items }  = useSelector((state)=> state.cart);
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCartItems())
         
    }, [])
    useEffect(() => {
        setCartValue(items?.length)
        }, [items?.length])

    useEffect(() => {
      setCartValue(cartValue)
         }, [cartValue])
   
         const token = sessionStorage.getItem("userCredential");
    try{
  var decoded = jwt_decode(token);
  }catch(err){
}

        useEffect(()=>{
      const token = sessionStorage.getItem("token");

  setDeliver(!token)
}) 
    
  
 const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: 'red',
            }}
        />
    );
    const drop = {
        height: '360px',
        overflow: 'auto',
        border: '1px solid rgba(140, 140, 140, 0.70)',
        background: 'white'
    }

    const options = [
        {
            value: 'All Categories',
            label: 'All Categories',
        },
        {
            value: 'Alexa Skills',
            label: 'Alexa Skills',
        },
        {
            value: 'Amazon devices',
            label: 'Amazon devices',
        },
        {
            value: 'Amazon Fashion',
            label: 'Amazon Fashion',
        },
        {
            value: 'Amazon Fresh',
            label: 'Amazon Fresh',
        },
        {
            value: 'Amazon Pharmacy',
            label: 'Amazon Pharmacy',
        },
        {
            value: 'Appliances',
            label: 'Appliances',
        },
        {
            value: 'Apps & Games',
            label: 'Apps & Games',
        },
        {
            value: 'Baby',
            label: 'Baby',
        },
        {
            value: 'Beauty',
            label: 'Beauty',
        },
        {
            value: 'Books',
            label: 'Books',
        },
        {
            value: 'Car & Motorbike',
            label: 'Car & Motorbike',
        },
        {
            value: 'Clothing & Accessories',
            label: 'Clothing & Accessories',
        },
        {
            value: 'Collectibles',
            label: 'Collectibles',
        },
        {
            value: 'Computer & Accessories',
            label: 'Computer & Accessories',
        },
        {
            value: 'Deals',
            label: 'Deals',
        },
        {
            value: 'Electronics',
            label: 'Electronics',
        },
        {
            value: 'Furniture',
            label: 'Furniture',
        },
        {
            value: 'Garden & Outdoors',
            label: 'Garden & Outdoors',
        },
        {
            value: 'Gift Cards',
            label: 'Gift Cards',
        },
        {
            value: 'Grocery & Gourmet Foods',
            label: 'Grocery & Gourmet Foods',
        },
        {
            value: 'Health & Personal Care',
            label: 'Health & Personal Care',
        },
        {
            value: 'Home & Kitchen',
            label: 'Home & Kitchen',
        },
        {
            value: 'Industrial & Scientific',
            label: 'Industrial & Scientific',
        },
        {
            value: 'Jewellery',
            label: 'Jewellery',
        },
        {
            value: 'Kindle Store',
            label: 'Kindle Store',
        },
        {
            value: 'Luggage & Bags',
            label: 'Luggage & Bags',
        },
        {
            value: 'Luxury Beauty',
            label: 'Luxury Beauty',
        },
        {
            value: 'Movies & TV Shows',
            label: 'Movies & TV Shows',
        },
        {
            value: 'Music',
            label: 'Music',
        },
        {
            value: 'Musical Instruments',
            label: 'Musical Instruments',
        },
        {
            value: 'Office Products',
            label: 'Office Products',
        },
        {
            value: 'Pet Supplies',
            label: 'Pet Supplies',
        },
        {
            value: 'Prime Video',
            label: 'Prime Video',
        },
        {
            value: 'Shoes & Handbags',
            label: 'Shoes & Handbags',
        },
        {
            value: 'Software',
            label: 'Software',
        },
        {
            value: 'Sports, Fitness & Outdoors',
            label: 'Sports, Fitness & Outdoors',
        },
        {
            value: 'Subscribe & Save',
            label: 'Subscribe & Save',
        },

        {
            value: 'Tools & Home Improvement',
            label: 'Tools & Home Improvement',
        },
        {
            value: 'Toys & Games',
            label: 'Toys & Games',
        },
        {
            value: 'Under Rs.500',
            label: 'Under Rs.500',
        },
        {
            value: 'Video Games',
            label: 'Video Games',
        },
        {
            value: 'Watches',
            label: 'Watches',
        },


    ];

    function onChange(value) {
        console.log(value);
    }


    return (
        <>
        
        {/* <button onClick={() => { settoggle(!toggle) }}>popover</button> */}
                      <Popover1 toggle={toggle} />
                      <ModalView toggle2 = {toggle2}/>

                      {/* <LanguagePopover toggle3={toggle3} /> */}
        
            <div style={{
                backgroundColor: '#131921',
                position: "sticky", top: 0,
                display: 'flex', width: '100%', height: '60px', justifyContent: 'center', flexWrap: 'wrap', paddingRight:'0px'
            }}>

                <div style={{ width: '25%', display: 'flex' }}>
                    <div style={{ width: "45%", height: "100%", display: 'flex', justifyContent: 'start', alignItems: 'center', textAlign: 'center' }}>
                        <Link  to="/" class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', height: '70%', width: '90%' }}>
                            <img style={{margin:'0px 10px'}} className='header_logo' src='https://pngshare.com/wp-content/uploads/2021/06/Amazon-Logo-Black-Background-11.png' />
                            </Link >
                    </div>
                    {/* <------------------------------------ */}
                  {deliver &&  <div  style={{ width: '65%', height: '100%', color: 'black', color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                        <a onClick={() => { settoggle2(!toggle2) }} class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', height: '85%', width: '80%',gap:'-30px' }}>
                            <span  style={{ fontSize: '12px', marginTop: '0px',paddingRight:'80px', color: 'white' }}>Hello</span>
                            <span style={{ fontFamily: 'inherit', fontWeight: '750', fontSize: '14px', color: 'white', marginTop: '-5px' }}><EnvironmentOutlined style={{fontSize:'16px'}} /> Select your address</span>
                        </a >
                    </div>}
                  {!deliver &&  <div  style={{ width: '65%', height: '100%', color: 'black', color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                        <a onClick={() => { settoggle2(!toggle2) }} class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', height: '85%', width: '80%',gap:'-50px' }}>
                          <div style={{}}> <div  style={{ fontSize: '12px', marginTop: '0px', color: 'lightgrey', paddingRight:'30px', marginTop:"0px" }}>Deliver to {decoded.user.name} </div>
                            <div style={{ fontFamily: 'inherit', fontWeight: '750', fontSize: '14px', color: 'white', marginTop: '-5px' }}><EnvironmentOutlined style={{fontSize:'16px'}} /> Select your address</div></div> 
                        </a >
                    </div>}
                    {/* <--------------------------------------------> */}
                </div>

                <div style={{ width: '45%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <div  style={{ width: '105%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Search
                            addonBefore={
                                <Dropdown overlay={''} trigger={['click']} visible={cartValue}  >
                                    {/* // <div className="ant-dropdown-link" onClick={e => e.preventDefault()} stylr={drop} > */}
                                    {/* <a>   All <CaretDownOutlined /></Link > */}
                                   
                                    <Cascader options={options} onChange={onChange} style={{ width: '145%', padding: '0' , position:'relative'}} defaultValue='All.....' changeOnSelect id='sett' />
                                </Dropdown>

                            }
                            onClick={() => { settoggle(!toggle) }}
                            placeholder="input search text"
                            allowClear
                            size="large"
                            style={{ width: '100vw', paddingTop: '0px', fontSize: '20px', flexWrap: 'wrap', borderRadius: '10px' }}
                            
                      />
                      
                    </div>
                </div>

                <div style={{ width: '30%', display: 'flex', paddingLeft: '0px',  }}>

                    <LanguagePopover toggle={toggle} />
                    <SigninPopover />
                    {/* <SigninPopAuth /> */}

                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', paddingRight:'0px'  }}>
                        <a  to="" class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column',marginBottom:'2px', height: '85%', width: '90%' }}>
                            <span style={{ fontSize: '12px', color: 'white', paddingRight:'25px' }}>Return </span>
                                <span style={{ fontFamily: 'inherit', fontSize: '14px', color: 'white', fontWeight: '750', marginTop:'-5px' }}>& Orders</span></a >
                    </div>
                    <div style={{ width: '28%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', paddingRight:'16px' }}>
                        <Link  to="/cartShow" class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', flexDirection: 'column', height: '85%', width: '80%' }}>
                            <div  style={{ position: 'absolute', bottom: '35%' }}><h2 style={{ color: 'orange', fontSize: '1.3vw', margin: '2px 5px 0px 0px' }}>{cartValue}</h2></div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 25 24" fill="white" style={{ fontFamily: 'inherit', fontWeight: '750', fontSize: '1.8vw', transform:'rotateY(180deg)', marginRight:'10px'}} ><path d="M10 
    19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z" />
                            </svg>
                            <p style={{color:'white', margin:'25px 0px 0px 45px', position:'absolute'}}><b>Cart</b></p>
                        </Link >
                    </div>
                </div>
            </div>
            
        </>)
}
