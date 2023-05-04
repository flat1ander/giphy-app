import logo from './logo.svg';
import './App.css';
import React from 'react';
import GiphyDisplay from './Components/GiphyDisplay';
import Form from './Components/Form';

function App() {
  const [giph, setGiph] = React.useState(null);
  const apiKey = 'kpQqheTXkWpU5hfpiIAMnzgpnswqQyLl'

  const getGiph = async (searchTerm) => {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}'
    );
    const data = await response.json();
    setGiph(data);
  }

  return (
    <div className="App">
      <Form giphySearch={getGiph}/>
      <GiphyDisplay />
    </div>
  );
}

export default App;
