import React from 'react';

import {
  Document, Page,
} from 'react-pdf/dist/esm/entry.webpack5';

const PdfViewer = ({
  url, pageNumber
}) => (
  <Document file={url}>
    <Page
      pageNumber={pageNumber}
    />
  </Document>
);

export default PdfViewer;