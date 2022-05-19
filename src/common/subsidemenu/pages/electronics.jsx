import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useMemo, useState } from 'react'
import HeaderMain from '../dash/helper/mainheader';
import Footer from '../dash/helper/footer'
import Subheader2 from '../dash/helper/subheader2'
import Header1 from '../dash/helper/header1';
import { Button, Card, Cascader, Checkbox, Dropdown, Menu, Space } from 'antd';
import { ConsoleSqlOutlined, DownOutlined, EnvironmentOutlined, SecurityScanFilled, StarFilled, UploadOutlined, UserOutlined } from '@ant-design/icons';
import './zoom/magiczoomplus.css'
import './echo.css'
// import Magiczoomplus from './zoom/magiczoomplus';
import Subcomponent from '../dash/helper/subcomponent';
// import { decrease, increase } from '.././../Redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Item from 'antd/lib/list/Item';
import { addCartItems} from '../../../common/Redux/cartReducerCumActions'
import { useLocation, useNavigate } from 'react-router-dom';


export default function Electronics() {
    const navi = useNavigate();
  

    const [filterCat, setFilter] = useState([]);
    const [product, setProduct] = useState([]);
    const item = async () => {
        return await axios.get("https://mongodb-amazon.herokuapp.com/items")

    }
    useEffect(() => {
        item().then(res => { setProduct(res.data.data) })
    }, [])

   

    const options = [
    { label: 'Samsung', value: 'samsung' },
    { label: 'OnePlus', value: 'oneplus' },
    { label: 'Xiaomi', value: 'xiaomi' },
    { label: 'Realme', value: 'realme' },
    { label: 'Nokia', value: 'nokia' },
    { label: 'Vivo', value: 'vivo' },
    { label: 'Oppo', value: 'oppo' },
    ]

console.log(options);
    const Changehandler = (checkedValues) => {
        setFilter([...checkedValues])
    }
 console.log('filterr',filterCat)


    const style = {
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <>
            <HeaderMain />
            <div id='style-1' style={{ height: '100vh', maxWidth: '100%', backgroundColor: '', overflow: 'auto', marginBottom: '100px', display: 'flex', flexWrap: 'wrap', }}>
                <Header1 />
                <Subheader2 />
                <div >
                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                        <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center' }}>
                            <span><b><h2>Department</h2> </b>
                                <span><h3>Electronics</h3></span></span>
                                <div style={{marginTop:'30px '}}><h3>Brand</h3></div>
                            <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 20px' }}>
                                <Checkbox.Group options={options}  onChange={Changehandler} style={style} />
                            </div>
                        </div>
                        {/* <div style={{ width: '300px', height: '100px', background: '' }}> */}
                            <div  className='h' style={{ display: 'flex',justifyContent:"space-around", flexWrap:"wrap", margin: '10px', gap: '20px', width:'100%'}}>

                                {product.filter((item)=>{
                                    if(!filterCat.length){
                                        return item
                                    }
                                    else if(filterCat.includes(item.brand)) {
                                        return item;}                                                                 
                                }).map((v,index) => {
                               
                                     return (
                                        <>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            {/* <Item {...v} key={index} /> */}
                                                <Card style={{ display: 'flex', flexDirection: 'row', boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                                                    <div style={{ padding: '20px 20px' }}>
                                                        <img onClick={()=>{navi('/addcart',{state: v})}} src={v.img} /><br />
                                                        <div style={{ padding: '20px 0px' }} ><p>{v.title}</p></div>
                                                    </div>
                                                </Card>
                                            </div>
                                        </>)
                                })}
                            </div>
                        {/* </div> */}
                    </div>
                   
                </div>
               
                {/* <Subcomponent />
                <img style={{ width: '96%', margin: '0px 70px 30px 30px' }} src='https://m.media-amazon.com/images/G/31/kindle/journeys/eFu8CFvlYoIj2FKRtRoGVbg0fIKXUEyL3Ry8GNVsaMyM3D/ZjMyMDA2Nzkt' alt='as' /> */}
               <Footer/>
            </div>

        </>
    )
}
