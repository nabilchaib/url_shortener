import React from 'react';
import ReactDOM from 'react-dom/client';
import InputField from './input_field_react';

const App = () => (
  <div>
    <h1>Welcome to the URL Shortener</h1>
    <InputField/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)