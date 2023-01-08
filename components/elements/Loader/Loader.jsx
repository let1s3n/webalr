import React from 'react'

import { Image } from 'react-bootstrap';

const Loader = (props) => {
  return (
    <div className={props.loading ? "loader pulse d-flex justify-content-center pt-18" : "d-none"}>
      <Image className="logo-loader" src={`${process.env.NEXT_CDN}images/logo-alr-square.png`} alt="logo loader" />
    </div>
  )
}

export default Loader