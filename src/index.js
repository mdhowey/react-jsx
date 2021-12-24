// dependencies 
// ReactDOM includes webpack --> what is that?
// import keyword tells jsx to get code from other files or other packages
// ES2015 Modules make use of 'import' keyword
// library variable is 'taco'
import ReactDOM from 'react-dom';

// REQUIRE KEYWORD:
// CommonJS Modules make use of 'require' keyword 
// const React = require('react');

// create React component 
// component is function or class --> produces HTML for client; handle client feedback
const App = () => {
  return <div>Hi there!</div>
};

// render component to browser
ReactDOM.render(
  // render above App function
  <App />,
  // built-in native function on all browsers
  document.querySelector('#root')
);