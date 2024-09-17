import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

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

    socket.emit('codeChange', { html, css, js });

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  useEffect(() => {
    socket.on('updateCode', ({ html, css, js }) => {
      setHtml(html);
      setCss(css);
      setJs(js);
    });
  }, []);

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
          frameBorder="0"
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
};

export default App;
