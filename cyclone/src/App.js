import React from "react";

import * as zoid from "zoid/dist/zoid.frameworks.js";

window.customComponent = zoid.create({
  tag: "cyclone-app",
  dimensions: {
    width: "1400px",
    height: "900px",
  },
});

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#87B6FA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        <strong>Cyclone App</strong>
      </h1>
      <p
        style={{
          fontSize: "xxx-large",
        }}
      >
        version 2
      </p>
    </div>
  );
};

export default App;
