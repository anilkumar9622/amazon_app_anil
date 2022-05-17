import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';

export default function Popover1(props) {
  const [showModal, setshowModal] = useState(false)

  useEffect(() => {
     props.toggle != null && setshowModal(!showModal)
  }, [props.toggle])

const handleCapturing = () => {
  setshowModal(!showModal)
}
return (
    <>
    {showModal &&
     <div id="modal" 
      onClick={handleCapturing} 
       style={{
      backgroundColor:'black',
      backgroundColor: 'rgba(199, 193, 198, 0.7)',
      position: 'absolute',
      marginTop: '100px',
      width: '100',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      zIndex: '99999',
    }}  >
      {/* <div  style={{ backgroundColor: 'white', width: '650px', height: '496px', borderRadius: '8px', objectFit: "contain" }} >
        {props.children}
      </div> */}
      </div>
}
    </>
  )
}
