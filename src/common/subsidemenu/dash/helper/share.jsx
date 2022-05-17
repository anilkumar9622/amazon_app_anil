import React, { useState } from 'react'

export default function Share() {
    const [copied, setCopied] = useState(false);

    function copy() {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    }
  return (
    <>
<div className="App">
      <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button>
    </div>
    </>
  )
}

