import React, { useState } from 'react'

export default function FBC(props) {

    let [state,changeState] = useState();
  return (
    <div>
      <p>practically seeing the merge conflict with version2 branch</p>
      <p> Helloo</p>
      <p>version2</p>
      <p>Function based Component with rfc command {props.topic}</p>
      <p>All are shifted to FunctionBasedComponents due to difficulty in ClassBasedComponents ,
         Only legacy systems uses the ClassBasedComponents
         <p>Hi</p>
         <p>Heloo from version1</p>
         <p>Version1</p>
      </p>
    </div>
  )
}
