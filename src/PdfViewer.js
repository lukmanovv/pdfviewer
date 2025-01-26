// PdfViewer.js
import React from "react";
import { useSelector } from "react-redux";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = () => {
  const file = useSelector((state) => state.pdf.file);
  const scale = useSelector((state) => state.pdf.scale);

  return (
    <div style={{ height: "100vh" }}>
      {file ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={file} defaultScale={scale} />
        </Worker>
      ) : (
        <p>Загрузите PDF-файл, чтобы начать просмотр.</p>
      )}
    </div>
  );
};

export default PdfViewer;