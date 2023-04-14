

// -----------------

// import React, { useState } from "react";
// import "../styles/Previewcard.css";

// function App() {
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [code, setCode] = useState("");
//   const [isValid, setIsValid] = useState(false);

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//     setIsValid(false);
//   };

//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//     setIsValid(false);
//   };

//   const verifyCode = () => {
//     // Verify the language of the code
//     // This is a simplified example using only a few languages
//     let valid = false;
//     if (selectedLanguage === "React") {
//       valid = /import React|^class/.test(code);
//     } else if (selectedLanguage === "JavaScript") {
//       valid = /^function|^const|^let|^var/.test(code);
//     } else if (selectedLanguage === "Node") {
//       valid = /^const\s|^let\s|^var\s|^function\s|^module\.exports\s/.test(code);
//     } else if (selectedLanguage === "HTML") {
//       valid = /^<html>|^<head>|^<title>|^<body>|^<h1>|^<p>|^<div>|^<ul>|^<li>|^<img>/.test(code);
//     }

//     setIsValid(valid);
//   };

//   return (
//     <div className="App">
//       <h1>Submit Code Snippet</h1>
//       <form>
//         <label htmlFor="language">Language:</label>
//         <select
//           id="language"
//           name="language"
//           value={selectedLanguage}
//           onChange={handleLanguageChange}
//         >
//           <option value="">Select Language</option>
//           <option value="React">React</option>
//           <option value="JavaScript">JavaScript</option>
//           <option value="Node">Node</option>
//           <option value="HTML">HTML</option>
//         </select>
//         <br />
//         <br />
//         <label htmlFor="code">Code:</label>
//         <textarea
//           id="code"
//           name="code"
//           rows="10"
//           cols="50"
//           value={code}
//           onChange={handleCodeChange}
//         ></textarea>
//         <br />
//         <br />
//         <button type="button" onClick={verifyCode}>
//           Verify
//         </button>
//         <br />
//         <br />
//         <div id="preview">
//           {isValid ? (
//             <pre>
//               <code className={selectedLanguage}>{code}</code>
//             </pre>
//           ) : (
//             selectedLanguage && (
//               <p style={{ color: "red" }}>Invalid code for the selected language.</p>
//             )
//           )}
//         </div>
//         <br />
//         <br />
//         <button type="submit" disabled={!isValid}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;



// -------------------

import React, { useState } from "react";
import "../styles/Previewcard.css";
import VerifyCode from "../components/VerifyCode";

function SubmitCode() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [title, setTitle] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setIsValid(false);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setIsValid(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setIsValid(false);
  };

  const handleCodeVerify = () => {
    setIsValid(true);
  };

  return (
    <div className="App">
      <h1>Submit Code Snippet</h1>
      <form>
        <label htmlFor="title">Snippet Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          name="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="">Select Language</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Node">Node</option>
          <option value="HTML">HTML</option>
        </select>
        <br />
        <br />
        <label htmlFor="code">Code:</label>
        <textarea
          id="code"
          name="code"
          rows="10"
          cols="50"
          value={code}
          onChange={handleCodeChange}
        ></textarea>
        <br />
        <br />
        <button type="button" onClick={handleCodeVerify}>
          Verify
        </button>
        <br />
        <br />
        <VerifyCode
          selectedLanguage={selectedLanguage}
          code={code}
          isValid={isValid}
        />
        <br />
        <br />
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitCode;
