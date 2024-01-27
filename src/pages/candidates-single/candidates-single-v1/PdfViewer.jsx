import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import packageJson from '../../../../package.json';
function PdfViewer({pdfFile}) {
    console.log(pdfFile)
    const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
    const newPlugin = defaultLayoutPlugin()

    return ( 
        <div className="pdf_viewer_contianer">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfFile} plugins={[newPlugin]} />
            </Worker>
        </div>
     );
}

export default PdfViewer;