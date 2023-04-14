

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
import { useNavigate } from "react-router-dom";
import "../styles/SubmitCode.css";
import VerifyCode from "../components/VerifyCode";

function SubmitCode() {
  // Initialize state variables for the form
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [title, setTitle] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get the navigate function from the react-router-dom package
  const navigate = useNavigate();

  // Update the selectedLanguage state variable when the user selects a language
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setIsValid(false); // Reset the validation flag
  };

  // Update the code state variable when the user types into the code input field
  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setIsValid(false); // Reset the validation flag
  };

  // Update the title state variable when the user types into the title input field
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setIsValid(false); // Reset the validation flag
  };

  // Set the isValid state variable to true when the user clicks the Verify button
  const handleCodeVerify = () => {
    setIsValid(true);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Set the isSubmitted flag to true
    // TODO: Perform submission logic here (e.g. send the form data to a server)
    // Navigate to the code snippet page after successful submission
    navigate("/code-snippet");
  };

  return (
    <div className="container">
      {/* Display the form heading */}
      <h1 className="heading">Submit Code Snippet</h1>
      {/* Display the form */}
      <form className="form" onSubmit={handleSubmit}>
        {/* Display the title input field */}
        <div className="form-group">
          <label htmlFor="title">Snippet Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="input"
          />
        </div>
        {/* Display the language dropdown */}
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            name="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="select"
          >
            <option value="">Select Language</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Node">Node</option>
            <option value="HTML">HTML</option>
          </select>
        </div>
        {/* Display the code input field */}
        <div className="form-group">
          <label htmlFor="code">Code:</label>
          <textarea
            id="code"
            name="code"
            rows="10"
            cols="50"
            value={code}
            onChange={handleCodeChange}
            className="textarea"
          ></textarea>
        </div>
        {/* Display the Verify button */}
        <button type="button" onClick={handleCodeVerify} className="button">
          Verify
        </button>
        {/* Display the verification results */}
        <VerifyCode
       selectedLanguage={selectedLanguage}
       code={code}
       isValid={isValid}
     />
{/* Display the submit button */}
<button type="submit" disabled={!isValid} className="button">
Submit
</button>
</form>
</div>
);
}

export default SubmitCode;






