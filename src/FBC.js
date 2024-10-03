import React, { useState } from 'react'

export default function FBC(props) {

    let [state,changeState] = useState();
  return (
    <div>
      <p>Function based Component with rfc command {props.topic}</p>
    </div>
  )
}
