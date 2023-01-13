import React from 'react'

const Proximamente = () => {
  return (
    <div className="proximamenteContainer d-flex flex-column position-fixed top-50 start-50 translate-middle" style={{ rowGap: "1.5rem" }}>
      <h1 className="m-0 text-center">Próximamente</h1>
      <img className="imgProximamente" src={`${process.env.NEXT_CDN}images/logo-alr.png`} alt="logo alr" />
    </div>
  )
}

export default Proximamente