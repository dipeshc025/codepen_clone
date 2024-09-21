// import React, { useState } from "react";
// import axios from "axios";
// import Editor from './Editor'; // Ensure the correct import path

// const CodeEditor = () => {
//   const [html, setHtml] = useState("");
//   const [css, setCss] = useState("");
//   const [js, setJs] = useState("");

//   // Create srcDoc for the iframe
//   const srcDoc = `
//     <html>
//       <head>
//         <style>${css}</style>
//       </head>
//       <body>
//         ${html}
//         <script>${js}</script>
//       </body>
//     </html>
//   `;

//   const savePen = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:5000/api/pens/save",
//         { html, css, js },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       if (response.status === 201) {
//         alert("Pen saved successfully!");
//       }
//     } catch (error) {
//       console.error("Error saving pen:", error);
//       alert("Failed to save the pen.");
//     }
//   };

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       <div>
//         <h2 style={{ color: 'white' }}>HTML</h2>
//         <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
//       </div>
//       <div>
//         <h2 style={{ color: 'white' }}>CSS</h2>
//         <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
//       </div>
//       <div>
//         <h2 style={{ color: 'white' }}>JavaScript</h2>
//         <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
//       </div>
//       <div className="col-span-2">
//         <h2 style={{ color: 'white' }}>Output</h2>
//         <iframe
//           srcDoc={srcDoc}
//           title="output"
//           className="w-full h-96 border"
//           sandbox="allow-scripts"
//         />
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;
