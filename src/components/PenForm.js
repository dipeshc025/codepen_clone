import React from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';  
import 'codemirror/theme/material.css';  
import 'codemirror/mode/xml/xml';        
import 'codemirror/mode/css/css';        
import 'codemirror/mode/javascript/javascript'; 

const PenForm = ({ html, setHtml, css, setCss, js, setJs }) => {
    const handleSave = async () => {
        try {
            // Implement the save functionality
            // e.g., send data to the backend
            const response = await fetch('http://localhost:5000/api/pens', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you're using JWT
                },
                body: JSON.stringify({ html, css, js }),
            });

            if (!response.ok) {
                throw new Error('Failed to save pen');
            }

            const data = await response.json();
            console.log('Pen saved successfully:', data);
            // Optionally show a success message to the user
        } catch (error) {
            console.error('Error saving pen:', error);
            // Optionally show an error message to the user
        }
    };

    const previewSrc = `
        <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${js}</script>
        </html>
    `;

    return (
        <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Your Pen</h2>
            <div className="flex flex-col md:flex-row gap-4">
                {/* HTML Editor */}
                <div className="flex-1">
                    <label className="mb-2 font-medium text-lg">HTML</label>
                    <CodeMirror
                        value={html}
                        options={{
                            mode: 'xml',
                            theme: 'material',
                            lineNumbers: true,
                        }}
                        onBeforeChange={(editor, data, value) => {
                            setHtml(value);
                        }}
                        className="rounded-md shadow"
                        style={{ height: '200px' }}
                    />
                </div>
                {/* CSS Editor */}
                <div className="flex-1">
                    <label className="mb-2 font-medium text-lg">CSS</label>
                    <CodeMirror
                        value={css}
                        options={{
                            mode: 'css',
                            theme: 'material',
                            lineNumbers: true,
                        }}
                        onBeforeChange={(editor, data, value) => {
                            setCss(value);
                        }}
                        className="rounded-md shadow"
                        style={{ height: '200px' }}
                    />
                </div>
                {/* JavaScript Editor */}
                <div className="flex-1">
                    <label className="mb-2 font-medium text-lg">JavaScript</label>
                    <CodeMirror
                        value={js}
                        options={{
                            mode: 'javascript',
                            theme: 'material',
                            lineNumbers: true,
                        }}
                        onBeforeChange={(editor, data, value) => {
                            setJs(value);
                        }}
                        className="rounded-md shadow"
                        style={{ height: '200px' }}
                    />
                </div>
            </div>
            {/* Save Button */}
            <button 
                onClick={handleSave} 
                className="self-end px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
                Save Pen
            </button>
            {/* Live Preview */}
            <h3 className="text-lg font-bold mb-2">Live Preview</h3>
            <iframe 
                srcDoc={previewSrc} 
                title="Live Preview" 
                className="w-full h-80 border border-gray-300"
            ></iframe>
        </div>
    );
};

PenForm.propTypes = {
    html: PropTypes.string.isRequired,
    setHtml: PropTypes.func.isRequired,
    css: PropTypes.string.isRequired,
    setCss: PropTypes.func.isRequired,
    js: PropTypes.string.isRequired,
    setJs: PropTypes.func.isRequired,
};

export default PenForm;
