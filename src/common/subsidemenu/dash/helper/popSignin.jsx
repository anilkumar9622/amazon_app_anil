import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';

export default function PopSignin(props) {
  const [showModal, setshowModal] = useState(false)

  console.log("shooooo", props);
  useEffect(() => {
    props.toggl != null && setshowModal(!showModal)
 }, [props.toggl])

const handleCapturing = () => {
  setshowModal(!showModal)
}
return (
    <>
    {showModal &&
     <div id="modal" 
      onClick={handleCapturing} 
       style={{
      
      backgroundColor: 'red',
      position: 'absolute',
      marginTop: '100px',
      width: '100',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      zIndex: '99999',
    }}  >
     
      </div>
}
    </>
  )
}