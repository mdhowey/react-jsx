// 1. dependencies 
// ReactDOM includes webpack --> what is that?
// import keyword tells jsx to get code from other files or other packages
// ES2015 Modules make use of 'import' keyword
// library variable is 'taco'
import ReactDOM from 'react-dom';

// REQUIRE KEYWORD:
// CommonJS Modules make use of 'require' keyword 
// const React = require('react');

// 2. create React component 
// component is function or class --> produces HTML for client; handle client feedback

const App = () => {
  // variables are legal in JSX --> need to be referenced in {curly braces}
  // objects can't be text, they can be attributes (i.e.- style={{}})
  const buttonText = { buttonText: 'Push me!' };
  const labelText = 'Enter name: ';

  return (
    <div>
      {/* "double-quotes" for strings in JSX */}
      {/* className is in place of class keyword for React; avoids Class/class confusion */}
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* inline styling to element needs to be in {{}}, camelCasing for attribute, 'single-quotes' value */}
      {/* 'single-quotes' --> common convention in React community for 'values' */}
      <button style={{
        backgroundColor: 'blue',
        color: 'white',
        border: '2px solid black'
      }}>{buttonText.buttonText}
      </button>
    </div>
  );
};

// 3. render component to browser
// JSX --> Babel --> JS --> rendered to browser
ReactDOM.render(
  // render above App function
  <App />,
  // built-in native function on all browsers
  document.querySelector('#root')
);

// Side note --> keep console open in browser to catch other errors and warning that don't crash app
// i.e.- 'for' is 'htmlFor' in React