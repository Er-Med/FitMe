import React, { useEffect, useState } from 'react';

function TanslateOpacity() {
  const [load ,setLoad] = useState(false) 
  useEffect(()=>{
    setLoad(true);
  },[])
  return load
}

export default  TanslateOpacity;