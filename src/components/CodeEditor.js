import React, { useState } from "react";
import axios from "axios";

const CodeEditor = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // Create srcDoc for the iframe
  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  const savePen = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/pens/save",
        { html, css, js },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 201) {
        alert("Pen saved successfully!");
      }
    } catch (error) {
      console.error("Error saving pen:", error);
      alert("Failed to save the pen.");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div>
        <h2>HTML</h2>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="w-full h-32 border"
        />
      </div>
      <div>
        <h2>CSS</h2>
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          className="w-full h-32 border"
        />
      </div>
      <div>
        <h2>JavaScript</h2>
        <textarea
          value={js}
          onChange={(e) => setJs(e.target.value)}
          className="w-full h-32 border"
        />
      </div>
      <div className="col-span-2">
        <h2>Output</h2>
        <iframe
          srcDoc={srcDoc}
          title="output"
          className="w-full h-96 border"
          sandbox="allow-scripts"
        />
      </div>
     
    </div>
  );
};

export default CodeEditor;
