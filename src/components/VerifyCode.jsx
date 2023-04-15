import React from "react";

function VerifyCode({ selectedLanguage, code, isValid }) {
  // Verify the language of the code
  // This is a simplified example using only a few languages
  let valid = false;
  if (selectedLanguage === "React") {
    valid = /import React|class\s+\w+\s+extends\s+React.Component|class\s+\w+\s+extends\s+Component/.test(code);
  } else if (selectedLanguage === "JavaScript") {
    valid = /^function|^const|^let|^var/.test(code);
  } else if (selectedLanguage === "Node") {
    valid = /^const\s|^let\s|^var\s|^function\s|^module.exports\s/.test(code);
  } else if (selectedLanguage === "HTML") {
    valid = /^<html>|^<head>|^<title>|^<body>|^<h1>|^<p>|^<div>|^<ul>|^<li>|^<img>/.test(code);
  }
  
  return (
    <div id="preview">
      {isValid ? (
        <pre>
          <code className={selectedLanguage}>{code}</code>
        </pre>
      ) : (
        selectedLanguage && (
          <p style={{ color: "red" }}>Invalid code for the selected language.</p>
        )
      )}
    </div>
  );
}

export default VerifyCode;

