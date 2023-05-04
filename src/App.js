import logo from './logo.svg';
import './App.css';
import GiphyDisplay from './Components/GiphyDisplay';
import Form from './Components/Form';
import {useState, useEffect} from 'react';

function App() {
  const [giph, setGiph] = useState(null);
  const API_KEY = 'kpQqheTXkWpU5hfpiIAMnzgpnswqQyLl';

  const getGiph = async (searchTerm) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`
    );
    const data = await response.json();
    const displayData = (data.data[0].images.downsized_large.url)
    setGiph(displayData);
  }

  useEffect(() => {
    getGiph('Dog')
  }, [])

  return (
    <div className="App">
      <Form giphySearch={getGiph}/>
      <GiphyDisplay giph={giph} />
    </div>
  );
}

export default App;
