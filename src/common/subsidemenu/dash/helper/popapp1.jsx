import { Popover } from 'antd';
import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';
import LanguagePopover from './languagePopover';
import Popover1 from './popover';
// import ModalView from './popmodal'

export default function Popapp1() {
  const [toggle, settoggle] = useState(null)

  return (
    <>
        
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '600px' }}>
            <h1>The Awesome Modal</h1>

            <Button style={{ marginLeft: '0px', width: '130px', height: '40px', borderRadius: '5px', background: 'lightBlue', color: 'black' }}
              onClick={() => { settoggle(!toggle) }} > Open Modal </Button>
            <Popover1 toggle={toggle} />
            <LanguagePopover toggle={toggle} />
          </div>

          </>
  );
}
