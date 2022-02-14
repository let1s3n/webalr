import React from 'react'

import { Image } from 'react-bootstrap';

const Loader = () => {
  return (
    <div class="loader d-flex justify-content-center pt-18">
      <Image className="logo-loader" src="/images/logo-alr-square.png"/>
    </div>
  )
}

export default Loader