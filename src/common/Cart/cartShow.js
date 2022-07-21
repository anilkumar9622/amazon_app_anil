import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Cascader, Checkbox, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons'
import { cardApi5, cardApi6 } from '../../services/getApi/getApi'
import {  useDispatch, useSelector } from 'react-redux';
import { deleteCartItems } from '../Redux/cartReducerCumActions';
import Footer from '../subsidemenu/dash/helper/footer';
import Header1 from '../subsidemenu/dash/helper/header1';
import HeaderMain from '../subsidemenu/dash/helper/mainheader'
import Subheader2 from '../subsidemenu/dash/helper/subheader2';

export default function Cardshow() {
  const [cartData, setCartData] = useState([])
  const [saveForLater, setSaveForLater] = useState(false)
  const [itemsValue, setItemsValue] = useState(0)
console.log("ddddddddddddddddddd",cartData)
  var handleSave = (val) => {
    setSaveForLater(deleteItem(val._id)) 
  }
  useEffect( () =>{
    getList()
  },[])
 
const dispatch = useDispatch();
const { items }  = useSelector((state)=> state.cart);

  
  const getList=()=> {
      cardApi5().then(res => { setCartData(res.data.data) 
      // console.log(".....",setCartData)
    })
    }
     

  const deleteItem = async (_id, e) => {
    dispatch(deleteCartItems(_id))
    getList();
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { Option } = Select;

  var handleChange = (value) => {
     var t= console.log(value);
      setItemsValue( value)
    console.log('add',itemsValue);
  }
// console.log('>>>>>>',Option);
    var totalAmount = 0;
    
  //  var saveForLater = () => {
  //   deleteItem(val._id)
  //  }


  return (<>
    <HeaderMain />
      <div id='style-1' style={{ height: '100vh', maxWidth: '100%', backgroundColor: '#f0f0f0', overflowY: 'scroll', marginBottom: '100px', display: 'flex', flexWrap: 'wrap',  }}>
      <Header1 />
      <Subheader2 />
      {/* <div>{item}</div> */}
      
        <div style={{ height: '100vh', minHeight: '100%', width: '100%', display: 'flex',flexDirection:'row', flexWrap: "wrap", marginBottom: '100px' }}>
         <React.Fragment>
         <div style={{ backgroundColor: 'white', height: 'auto', width: '73%', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'', margin:'20px' }}>
         <div style={{borderBottom:'1px solid #ddd',margin:'20px 20px 0px 20px',display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <p style={{  fontSize:'' }}><h1>Shopping Cart</h1></p>
            <div style={{margin:'20px 80px 0px 0px'}}><p><h2>Price</h2></p>
            </div>
          </div>
          
         {cartData.map((val, key) => {
                        totalAmount += parseFloat(val.price) 

           return ( 
            <React.Fragment key={key}>
            <div  style={{borderBottom:'1px solid #ddd', display: 'flex',flexDirection:'column', justifyContent: '',alignItems:'', margin:'10px 0px 10px 20px',height: 'auto', width: '100%' }}>
              <div style={{display:'flex', flexDirection:'row'}}>
              <img style={{ height: '140px', width: '140px' }} src={val.img} />
              <div style={{display:'flex', flexDirection:'column', paddingTop: '0px', marginLeft: '20px', height: '100%', width:'600px'  }}>
              <h3>{val.title}</h3>
              
             <div style={{marginBottom:'10px',display:'flex', flexDirection:'column'}}>
                <div> Eligible for FREE Shipping</div>
                <div><img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' alt='' /></div>
                <div><Checkbox onChange={onChange}>This will be a gift Learn more</Checkbox></div>
                <div><b>Colour:</b> Black Slate</div>
             </div>

              <div style={{display:'flex', flexDirection:'row', justifyContent:'', gap:'16px'}}>
              <div style={{paddingBottom:'20px'}} className='itm'>
              <Select defaultValue="1" style={{ width: 50, background: 'grey' }} onChange={handleChange}>
                <Option value="1">1</Option>
                <Option value="2">2</Option> 
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
              {/* <div style={{color:'#007185', margin:'0px 0px'}}>See more like this</div> */}

              </div>
              <div style={{borderLeft:'1px solid #ddd', marginBottom:'35px'}}></div>
              <button id='uline' onClick={() => { deleteItem(val._id) }} style={{marginBottom:'34px',marginRight:'' ,background:'white', border:'none', color:'#007185'}}>Delete</button>
              <div style={{borderLeft:'1px solid #ddd', marginBottom:'35px'}}></div>
              <button id='uline' onClick={handleSave} style={{marginBottom:'34px',marginRight:'' ,background:'white', border:'none', color:'#007185'}}>Save for later</button>
              <div style={{borderLeft:'1px solid #ddd', marginBottom:'35px'}}></div>
              <div id='uline' style={{color:'#007185'}} >See more like this</div>
            </div>

            </div>
              <div style={{padding:'0px 100px',margin:'0px  0px', display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
              <h2>₹{val.price}</h2>
              </div>
              </div>

           </div>
          </React.Fragment>
    )
   })}
            <div style={{margin:'0px 70px 0px 20px',display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <p style={{  fontSize:'20px' }}>Subtotal ({items?.length} items):<b>₹{totalAmount}.00</b></p>
          </div>
          </div>
        </React.Fragment>

       <div style={{display:'flex', justifyContent:'', alignItems:'center',flexDirection:'column',width:'300px',height:'310px', margin:'20px 20px 20px 5px', background:'white'}}>
        <div style={{margin:'20px 20px', color:'green'}}> <p>
        <CheckCircleFilled style={{color:'green'}}/> Your order is eligible for FREE Delivery. Select this option at checkout. Details</p></div>
        <div style={{  fontSize:'18px' }}>Subtotal ({(items?.length)} items): <b>₹{totalAmount}.00</b></div>
        <div style={{margin:'0px 50px 0px 0px', }}> <Checkbox onChange={onChange}>This order contains a gift</Checkbox></div>
        <Button href='https://rzp.io/l/i1kL91x' style={{ fontWeight: '500', width: '260px', height: '38px', borderRadius: '9px', background: '#face2f', margin: '20px 0px 0px 0px' }}>Proceed to Buy</Button>
        <div style={{border:'1px solid #ddd', borderRadius:'8px', width:'260px', height:'50px', margin:'30px 0px 20px 0px', alignItems:'center'}}>
        <p style={{padding:'10px 40px'}}>EMI Available</p>
     </div>         
</div>
<div style={{ backgroundColor: 'white', height: 'auto', width: '73%', display: 'flex', flexDirection: 'row', justifyContent:'start', alignItems:'', margin:'20px' }}>

{/* <-----------------save for later----------------------> */}
{ cartData &&
cartData.map((val, key) =>{
  if(val._id && saveForLater)
  return(<>
         
           <div  style={{border:'1px solid #ddd', display: 'flex',flexDirection:'column', justifyContent: '',alignItems:'', margin:'20px 10px 10px 10px',height: 'auto', width: '30%' }}>
              <div style={{display:'flex', flexDirection:'column',display:'flex',alignItems:'center', justifyContent:'center'}}>
              <img style={{ height: '140px', width: '140px', margin:'10px 0px' }} src={val.img} />
              <div style={{display:'flex', flexDirection:'column', paddingTop: '0px', marginLeft: '10px', height: '100%', width:'250px'  }}>
              <h3>{val.title}</h3>
              
             <div style={{margin:'0px 0px 10px 0px',display:'flex', flexDirection:'column'}}>
                <div> Eligible for FREE Shipping</div>
                <div><img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' alt='' /></div>
                <div><Checkbox onChange={onChange}>This will be a gift Learn more</Checkbox></div>
                <div><b>Colour:</b> Black Slate</div>
             </div>
          </div>
         
          </div>
           <div style={{borderLeft:'1px solid #ddd', marginBottom:'0px', display:'flex', justifyContent:'center', alignItems:'center'}}></div>
              <button  style={{margin:'0px 20px 0px 25px' ,background:'white', border:'1px solid #ddd',borderRadius:'10px', color:'black', width:'250px', height:'35px'}}>Move to cart</button>
              <button id='uline'   style={{paddingTop:'10px',marginRight:'200px' ,background:'white', border:'none', color:'#007185'}}>delete</button>
              <div id='uline' style={{color:'#007185',display:'flex', justifyContent:'center', alignItems:'center' ,marginRight:'130px'}} >See more like this</div>
          </div>
  </>)
})}
</div>
  <Footer />
  </div>
  </div>
  </>
  )
}
