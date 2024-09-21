import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const Editor = ({ language, displayName, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  return (
    <div className="editor-container" style={{ border: '1px solid #ccc', borderRadius: '4px', marginBottom: '20px', backgroundColor: '#1F2023' }}>
      <div className="editor-title" style={{ padding: '10px', backgroundColor: '#1F2023', borderBottom: '1px solid #ccc', color: 'white' }}>
        {displayName}
      </div>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};



export default Editor;
