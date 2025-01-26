// PdfControls.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setScale, setFile } from "./pdfSlice";

const PdfControls = () => {
  const dispatch = useDispatch();
  const scale = useSelector((state) => state.pdf.scale);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setFile(URL.createObjectURL(file)));
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={() => dispatch(setScale(scale + 0.1))}>+</button>
      <button onClick={() => dispatch(setScale(scale - 0.1))}>-</button>
    </div>
  );
};

export default PdfControls;
