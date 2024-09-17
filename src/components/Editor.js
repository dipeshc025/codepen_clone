import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const Editor = ({ mode, code, onChange }) => {
  return (
    <div className="editor">
      <AceEditor
        mode={mode}
        theme="monokai"
        onChange={onChange}
        name={`${mode}-editor`}
        value={code}
        width="100%"
        height="300px"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default Editor;
