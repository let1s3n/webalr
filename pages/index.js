import Head from 'next/head'
import Image from 'next/image'
import {Row,Col} from 'react-bootstrap'
export default function Home() {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <title>SMRL Acumulación Los Rosales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="title" content="SMRL Acumulación Los Rosales" />
        <meta name="description" content="Peruanos en busca de la excelencia haciendo minería responsable." />
        <meta name="keywords" content="minera, minería, acumulación los rosales, minería responsable, minería peruana" />
      </Head>
      <Image className="logo" src="/images/logo-alr.png" width={200} height={200} alt="ALR logo"/>
      {/* <Row xs={1} className="g-0">
        <Col className="text-center">
          <Image className="logo logo--big" src="/images/logo-alr.png" />
        </Col>
        <Col>
          <h1 className="text-white m-0 text-center custom-font-lg-2 custom-font-xxl-1">Acumulación Los Rosales</h1>
        </Col>
      </Row> */}


    </>
  )
}
