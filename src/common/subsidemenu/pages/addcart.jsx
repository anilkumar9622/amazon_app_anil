import axios from 'axios';
import React, { useEffect } from 'react'
import HeaderMain from '../dash/helper/mainheader';
import Footer from '../dash/helper/footer'
import Subheader2 from '../dash/helper/subheader2'
import Header1 from '../dash/helper/header1';
import { Button, Cascader, Checkbox, Dropdown, Menu, Select, Space } from 'antd';
import { DownOutlined, EnvironmentOutlined, SecurityScanFilled, StarFilled, UploadOutlined, UserOutlined } from '@ant-design/icons';
import './zoom/magiczoomplus.css'
import './echo.css'
import Subcomponent from '../dash/helper/subcomponent';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { addCartItems, quantityCartItems} from '../../../common/Redux/cartReducerCumActions'

export default function Addcart() {
    const navi = useNavigate();
    const {state} = useLocation();
    const dispatch = useDispatch();

    const cartadded = async (e, val) => {

        e.preventDefault();
        let n1 = val.title
        let n2 = val.disc1
        let n3 = val.price
        let n4 = val.img
        
        const item = { "title": n1, "disc1": n2, "price": n3, "img": n4}
        dispatch(addCartItems(item))
        navi('/cart', {state:val})
    }

    // const addQuantity = async (e, val) => {
    //     e.preventDefault();
    //     const quant = {handleChange};
    //     dispatch(quantityCartItems(quant))
    // }

const { Option } = Select;

var handleChange = (value) => {
  console.log(`selected ${value}`);
//   dispatch(quantityCartItems(value),{state:value})

}
    
  return (
   <>
   
           <HeaderMain />
            <div id='style-1' style={{ height: '100vh', maxWidth: '100%', backgroundColor: '', overflowY: 'scroll', marginBottom: '100px', display: 'flex', flexWrap: 'wrap',  }}>
            <Header1 />
             <Subheader2 />
                 <div style={{ height: '100vh', minHeight: '100%', width: '100%', display: 'flex', flexWrap: "wrap", marginBottom: '100px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%px' }}>
                        <div style={{ position: 'relative' }}>   <img src={state.img}
                            style={{ height: '220px', width: '220px', alignItems: 'center', marginBottom: '30px', marginTop: '140px', marginLeft: '110px' }} alt='img' />
                            <div style={{ margin: '30px 350px', padding: '10px', fontSize: '25px', position: 'absolute', display: 'flex', justifyContent: 'end', borderRadius: '50%', border: '1px solid #ddd' }}><UploadOutlined /></div>
                            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', margin: '50px 20px', gap: '10px' }}>
                                <img style={{ width: '40px', height: '52px', border: '1px solid black' }} src='https://m.media-amazon.com/images/I/41r4f9QbpaL._SX38_SY50_CR,0,0,38,50_.jpg' alt='a' />
                                <img style={{ width: '40px', height: '52px', border: '1px solid black' }} src='https://m.media-amazon.com/images/I/41+-ugYrCvL._SX38_SY50_CR,0,0,38,50_.jpg' alt='img' />
                                <img style={{ width: '40px', height: '52px', border: '1px solid black' }} src='https://m.media-amazon.com/images/I/51DOr+tYt+L._SX38_SY50_CR,0,0,38,50_.jpg' alt='img' />
                                <img style={{ width: '40px', height: '52px', border: '1px solid black' }} src='https://m.media-amazon.com/images/I/41MSGCny+ZL._SX38_SY50_CR,0,0,38,50_.jpg' alt='img' />
                                <img style={{ width: '40px', height: '52px', border: '1px solid black' }} src='https://m.media-amazon.com/images/I/51NqmUvyUNS._SX38_SY50_CR,0,0,38,50_.jpg' alt='img' />
                                <img style={{ width: '40px', height: '52px', border: '1px solid black' }} src='https://m.media-amazon.com/images/I/51CTm7DPkTL._SX38_SY50_CR,0,0,38,50_.jpg' alt='img' />
                                <img style={{ width: '40px', height: '52px', border: '1px solid black' }} src='https://m.media-amazon.com/images/I/41sy-kZhlxL._SX38_SY50_CR,0,0,38,50_.jpg' alt='img' />
                            </div>
                        </div>
                        {/* <div style={{position:'', margin:'650px 150px', display:'flex', flexDirection:'row'}}>Roll over image to zoom in</div> */}
                         <div style={{ display: 'flex', flexDirection: 'column', margin: '20px 80px', gap: '10px', overflowY:'auto', overflow:'hidden' }}>
                            <p style={{ fontSize: '24px', margin: '0px ', width: '582px', fontWeight: '600' }}>{state.title}
                              <div style={{ fontSize: '16px', fontWeight: '480' }}>
                                <span style={{ margin: '0px ' }}>Brand: Amazon</span>
                                    <div style={{ borderBottom: '1px solid #ddd' }}>
                                       <span><span style={{ color: '#f2a41d' }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span> 4.4 out of 5 stars  27,198 ratings | 787 answered questions</span></div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center', alignContent: 'center', margin: '10px 0px' }}>
                                        <p style={{ margin: '0px 0px ' }}>Price: <h2>{state.price}</h2>
                                        {/* <div style={{borderBottom:'1px solid black', position:'absolute', margin:'300px'}}></div> */}
                                        <p><div style={{ marginRight: '50px ' }}>Deal of the Day:	{state.price}</div>
                                        <p style={{ margin: '0px ' }}>Ends in 3 days
                                        <p style={{ margin: '0px ' }}>You Save:	₹3,499.00 (53%) ( ₹549.00 less than buying separately )
                                        <p style={{ margin: '0px ' }}> Inclusive of all taxes</p></p></p></p></p></div>
                                    </div></p>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: '', gap: '50px', margin: '-20px 0px', marginBottom: '-30px' }}>
                                <p><img style={{ width: '40px', height: '40px' }} src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' />
                                    <p>Returns Policy</p></p>
                                <div><img style={{ width: '40px', height: '40px' }} src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png' />
                                    <p>Amazon Delivered</p> </div>
                                <p><img style={{ width: '40px', height: '40px', }} src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png' />
                                    <p>No-Contact Delivery</p> </p>
                            </div>
                            <div style={{ borderBottom: '1px solid #ddd' }} ></div>
                            <p style={{ fontSize: '16px' }}>Color Name: <b>Black</b></p>
                            <p style={{ display: 'flex', flexDirection: 'row', gap: '10px', margin: '-20px 0px' }}>
                                <img src='https://m.media-amazon.com/images/I/211O0mzIjXL._SS36_.jpg' alt='' />
                                <img src='https://m.media-amazon.com/images/I/611SsQAhCCL._SS36_.jpg' alt='' />
                                <img src='https://m.media-amazon.com/images/I/216CYseYQQL._SS36_.jpg' alt='' />
                            </p>
                            <p style={{ fontSize: '16px', margin: '16px 0px' }}>Configuration: <b>with smart bulb at only ₹50 extra</b></p>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                <Button style={{ width: '90px', height: '38px', background: 'none', }}>Echo dot</Button>
                                <Button style={{ width: '190px', height: '38px', background: 'none' }}>Two Pack with small bulb</Button>
                                <Button style={{ width: '260px', height: '38px', background: '#fff5ff', border: '1px solid pink' }}><b>with smart bulb at only Rs50 extra</b></Button>
                            </div>
                            <Button style={{ width: '330px', height: '38px', background: 'none' }}>with smart plug for TV & chargers at Rs.399 only</Button>

                            <div style={{margin:'0px -20px', width:'590px'}}>
                                <ul>
                                    <li>This combo contains Echo Dot (4th Gen) and Philips 9W smart color bulb. Use this combo to experience the magic of controlling your lights
                                        using just your voice (with Alexa) or remotely (through an App).
                                        You can also set smart routines: dim it automatically at 10pm or turn it on at 7pm.
                                        Only Wi-Fi needed - no additional hub or setup required
                                    </li>
                                    <li>Echo Dot (4th Gen) has a new spherical design and improved bass performance compared to Echo Dot (3rd Gen)</li>
                                    <li>Get started with Smart home: It is simple to make your home smart and use voice to control lights. Extend this experience to other appliances like ACs, TVs, geysers using smart plugs (to be purchased separately)
                                    </li>
                                    <li>Hands-free music control: Stream millions of songs in your favorite language from Amazon Prime Music, Spotify, JioSaavn, Gaana, or Apple Music
                                    </li>
                                    <li>Versatile usage: use Echo Dot as a standalone speaker or connect it to other speakers/headphones to enjoy audio on your favorite devices. Or simply pair your phone with Echo Dot and use it as a Bluetooth speaker
                                    </li>
                                </ul>
                            </div>
                        </div>
                          <div style={{ width: '270px', height: '530px', margin: '20px -10px', border: '1px solid #ddd', borderRadius: '3px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', margin: '15px 15px', gap: '0px', fontSize: '15px' }}>
                                <p> <b>{state.price}</b>
                                <p>FREE delivery: <b>Tomorrow</b> Details</p>
                                <p ><EnvironmentOutlined /> Select delivery location
                                <p>In stock.</p>
                                <p>Sold by Trade Online and Fulfilled by Amazon.{state.value}</p>
                                <p><b>Quantity: </b>
                                        
                                <Select defaultValue="1" style={{ width: 60 }} 
                                 onChange={handleChange} >
                                  <Option value="1">1</Option>
                                  <Option value="2">2</Option>
                                  <Option value="3">3</Option>
                                  <Option value="4">4</Option>
                                </Select>
                                   </p>
                                    <div>
                                        <p ><Button onClick={(e) => {cartadded(e,state) }}  style={{ fontWeight: '500', width: '240px', height: '38px', borderRadius: '20px', background: '#face2f' }}>Add to Cart</Button></p>
                                        <p><Button   style={{ fontWeight: '500', width: '240px', height: '38px', borderRadius: '20px', background: '#faa22f' }}>Buy Now</Button></p></div>
                                        <p><SecurityScanFilled /> Secure transaction
                                        <p style={{ borderBottom: '1px solid #ddd' }}>
                                            <Checkbox >This will be a gift</Checkbox>
                                            <Checkbox >Link device to your Amazon account to simplify setup. Why is this important?</Checkbox>
                                        </p></p></p>
                                <p><Button style={{ fontWeight: '500', width: '240px', height: '32px', borderRadius: '0px', background: 'linear-gradient(#ebedec, #cacfcc)', marginTop: '-70px', border: '1px solid black' }}>Add to Wish List</Button>
                                </p></p>
                           </div>
                        </div>
                    </div>
             <Subcomponent />
             <img style={{width:'96%', margin:'0px 70px 30px 30px'}} src='https://m.media-amazon.com/images/G/31/kindle/journeys/eFu8CFvlYoIj2FKRtRoGVbg0fIKXUEyL3Ry8GNVsaMyM3D/ZjMyMDA2Nzkt' alt='as' />
               <Footer />
                </div></div>

   </>
  )
}
//   await axios.post("https://mongodb-amazon.herokuapp.com/addCart", {"img": n4 , "title": n1, "disc1": n2}) 
//        .then(response => {
//            console.log(response);
//        })
//        .catch (error =>{
//            console.log("error ", error);
//        })