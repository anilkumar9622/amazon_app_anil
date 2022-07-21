
import { DownOutlined } from '@ant-design/icons';
import { Button, Cascader, Dropdown, Input, Menu, message, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import PopOver from './popover2'


export default function ModalView(props) {
   console.log(props);
   const [showModal, setshowModal] = useState(false)

   useEffect(() => {
      props.toggle2 != null && setshowModal(!showModal)
   }, [props.toggle2])

   const onChange = (value) => {
      console.log(value);
    };
    
    const options = [
      {
      //   value: 'Sri Lanka',
      //   label: 'Sri Lanka'
      }]


   return (
      <>
         {showModal && (<PopOver showModal={showModal} setshowModal={setshowModal}>

            <div style={{ borderRadius: '10px', }}>
               <div style={{
                  display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderBottom: '1px solid #ddd',
                  background: '#f5f5f5', width: '100%', height: '60px', fontSize: '16px', fontWeight: '600', padding: '0px 20px', borderRadius: '10px',
               }}>Choose your location</div>

               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 25px', fontSize: '12px', color: '#4f4f4e' }}>Select a delivery location to see product availability and delivery options</div>
               <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '0px 25px 0px 25px', height: '32px',
                  padding: '10px 0px', background: '#fcc40d'
               }}>sign in to see your address </div>
               <div style={{ display: 'flex', paddingLeft: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0px', borderBottom: '1px solid #ddd', width: '70px', margin: '0px 5px 20px 0px' }}></div>
                  <div style={{
                     display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0px',
                  }}>or enter an indian pincode</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0px', borderBottom: '1px solid #ddd', width: '70px', margin: '0px 0px 20px 5px' }}></div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 25px', gap: '10px', margin: '-10px 0px' }}>
                  <div><Input style={{ width: '205px' }}></Input></div>
                  <Button style={{ borderRadius: '10px', width: '100px' }}>Apply</Button>
               </div>
               <div style={{ display: 'flex', paddingLeft: '30px', margin: '-5px 0px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px 0px', borderBottom: '1px solid #ddd', width: '140px', margin: '0px 5px 20px 0px' }}></div>
                  <div style={{
                     display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0px 10px 0px',
                  }}>or</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px 0px', borderBottom: '1px solid #ddd', width: '150px', margin: '0px 0px 20px 5px' }}></div>
               </div>
               <Cascader  onChange={onChange} placeholder="Deliver outside India" style={{width:'315px', borderRadius:'10px', margin:'0px 30px', background:'#ddd',color:'black'}} />
            </div>
         </PopOver >
         )
         }
      </>
   )
}
