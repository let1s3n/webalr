import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // Agregamos el idioma que deseemos, aquí por ejemplo español.
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <meta name="title" content="SMRL Acumulación Los Rosales" />
          <meta name="description" content="Peruanos en busca de la excelencia haciendo minería responsable." />
          <meta name="keywords" content="minera, minería, acumulación los rosales, minería responsable, minería peruana" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;