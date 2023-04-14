import React, { useState } from "react";
import "../styles/Previewcard.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setIsValid(false);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setIsValid(false);
  };

  const verifyCode = () => {
    // Verify the language of the code
    // This is a simplified example using only a few languages
    let valid = false;
    if (selectedLanguage === "javascript") {
      valid = /^function|^const|^let|^var/.test(code);
    } else if (selectedLanguage === "python") {
      valid = /^def|^class/.test(code);
    } else if (selectedLanguage === "java") {
      valid = /^public\s+class|^public\s+static\s+void/.test(code);
    } else if (selectedLanguage === "csharp") {
      valid = /^public\s+class|^public\s+static\s+void/.test(code);
    }

    setIsValid(valid);
  };

  return (
    <div className="App">
      <h1>Submit Code Snippet</h1>
      <form>
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          name="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="">Select Language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
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
        <button type="button" onClick={verifyCode}>
          Verify
        </button>
        <br />
        <br />
        <div id="preview">
          {isValid ? (
            <pre>
              <code className={selectedLanguage}>{code}</code>
            </pre>
          ) : (
            selectedLanguage && (
              <p>Invalid code for the selected language.</p>
            )
          )}
        </div>
        <br />
        <br />
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
