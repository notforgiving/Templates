import React from "react";
import "./styles.scss";
import Iframe from "./components/Iframe";
import { templates } from "./shared/data";
import IframeWrapper from "./components/IframeWrapper";

function App() {
  return (
    <div className="App">
      <IframeWrapper>
        {templates.map(
          (temp, index) => (index < 5) && <Iframe linkData={temp} key={temp} />
        )}
      </IframeWrapper>
    </div>
  );
}

export default App;
