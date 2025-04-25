import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

// Yeh React ko app ko 'app' id wale div mein render karne ke liye hai
ReactDOM.render(<App />, document.getElementById('app'));
