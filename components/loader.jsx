import React from 'react'

import { Image } from 'react-bootstrap';

const Loader = (props) => {
  return (
    <div class={props.loading ? "loader pulse d-flex justify-content-center pt-18" : "d-none"}>
      <Image className="logo-loader" src="/images/logo-alr-square.png" />
    </div>
  )
}

export default Loader