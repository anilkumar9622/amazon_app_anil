import React from 'react'

export default function Popover2(props) {
  console.log(props);
  const handleCapturing = () => {
    props.setshowModal(!props.showModal)
  }
  const handleContainer = (e) => {
    e.stopPropagation()
  }
  console.log(props.children)

  return (
    <div id="modal" 
    onClick={handleCapturing}
     style={{
      backgroundColor: 'rgba(199, 193, 198, 0.7)',
      position: 'absolute',
      top: '0',
      width: '100',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      zIndex: '99999',
    }} >

      <div onClick={handleContainer} style={{ backgroundColor: 'white', width: '373px', height: '300px', borderRadius: '8px', objectFit: "contain" }} >
        {props.children}
      </div>
    </div>
  )
}
