// // src/components/Preview.js
// import React, { useEffect, useRef } from "react";

// const Preview = ({ html, css, js }) => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const document = iframeRef.current.contentDocument;
//     document.open();
//     document.write(`
//       <html>
//         <head><style>${css}</style></head>
//         <body>${html}</body>
//         <script>${js}</script>
//       </html>
//     `);
//     document.close();
//   }, [html, css, js]);

//   return (
//     <iframe
//       ref={iframeRef}
//       title="Preview"
//       style={{ width: "100%", height: "300px", border: "none" }}
//     />
//   );
// };

// export default Preview;
