// App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import PdfViewer from "./PdfViewer";
import PdfControls from "./PdfControls";

const App = () => (
  <Provider store={store}>
    <div>
      <h1>PDF Просмотрщик</h1>
      <PdfControls />
      <PdfViewer />
    </div>
  </Provider>
);

export default App;
