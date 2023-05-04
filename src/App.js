import logo from './logo.svg';
import './App.css';
import React from 'react';
import GiphyDisplay from './Components/GiphyDisplay';
import Form from './Components/Form';

function App() {
  // const [giph, setGiph] = useState(null);
  // const apiKey = 'kpQqheTXkWpU5hfpiIAMnzgpnswqQyLl'

  return (
    <div className="App">
      <Form />
      <GiphyDisplay />
    </div>
  );
}

export default App;
