import React, { useState, useEffect } from 'react';
import Editor from './components/Editor/Editor';

function App() {
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


  return (
    <div className="min-h-screen flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-5">CodePen Clone</h1>

      {/* Top Pane: Editor section with equal parts */}
      <div className="flex w-full gap-4 mb-4">
        <div className="flex-1">
          <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        </div>
        <div className="flex-1">
          <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        </div>
        <div className="flex-1">
          <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
        </div>
      </div>

      {/* Bottom Pane: Output iframe */}
      <div className="w-full h-96 mb-4">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          className="w-full h-full"
        />
      </div>

      
    </div>
  );
}

export default App;
