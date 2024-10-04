import React, { useState } from 'react'

export default function FBC(props) {

    let [state,changeState] = useState();
  return (
    <div>
      <p>practically seeing the merge conflict with version2 branch</p>
      <p> Helloo</p>
      <p>version2</p>
      <p>Function based Component with rfc command {props.topic}</p>
    </div>
  )
}
