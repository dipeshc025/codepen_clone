import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import axios from "axios";

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const saveProject = async () => {
    try {
      await axios.post('/api/projects', { html, css, js });
      alert('Project saved!');
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  return (
    <div className="app-container p-4">
      <h1 className="text-2xl font-bold mb-4">CodePen Clone</h1>
      <div className="editor-section grid grid-cols-1 md:grid-cols-3 gap-4">
        <Editor mode="html" code={html} onChange={setHtml} />
        <Editor mode="css" code={css} onChange={setCss} />
        <Editor mode="javascript" code={js} onChange={setJs} />
      </div>
      <div className="preview-section mt-4">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="400px"
        />
      </div>
      <button
        onClick={saveProject}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Project
      </button>
    </div>
  );
};

export default App;
