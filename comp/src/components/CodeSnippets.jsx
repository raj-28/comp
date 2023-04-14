// import { useState } from 'react';

// function CodeSnippets({ snippets }) {
//   const [codeSnippets, setCodeSnippets] = useState(snippets);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newSnippet = event.target.elements.snippet.value;
//     setCodeSnippets([...codeSnippets, newSnippet]);
//     event.target.reset();
//   };

//   return (
//     <div>
//       <h1>Code Snippets</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="snippet" />
//         <button type="submit">Add Snippet</button>
//       </form>
//       {codeSnippets.map((snippet, index) => (
//         <pre key={index}>
//           <code>{snippet}</code>
//         </pre>
//       ))}
//     </div>
//   );
// }

// export default CodeSnippets;

import { useState } from 'react';

function CodeSnippets({ snippets = [] }) {
  const [codeSnippets, setCodeSnippets] = useState(snippets);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSnippet = event.target.elements.snippet.value;
    setCodeSnippets([...codeSnippets, newSnippet]);
    event.target.reset();
  };

  return (
    <div>
      <h1>Code Snippets</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="snippet" />
        <button type="submit">Add Snippet</button>
      </form>
      {codeSnippets && codeSnippets.map((snippet, index) => (
        <pre key={index}>
          <code>{snippet}</code>
        </pre>
      ))}
    </div>
  );
}

export default CodeSnippets;
