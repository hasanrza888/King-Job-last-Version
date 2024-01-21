import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfComp({pdfFile}) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{padding:'10px',backgroundColor:"#dedede",marginTop:'10px'}} className="pdf-div">
           <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </Document>
   
    </div>
  );
}
export default PdfComp;
