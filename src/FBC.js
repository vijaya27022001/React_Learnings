import React, { useState } from 'react'

export default function FBC(props) {

    let [state,changeState] = useState();
  return (
    <div>
      <p>practically seeing the merge conflict with version2 branch</p>
      <p>Function based Component with rfc command {props.topic}</p>
      <p>All are shifted to FunctionBasedComponents due to difficulty in ClassBasedComponents ,
         Only legacy systems uses the ClassBasedComponents
      </p>
    </div>
  )
}
