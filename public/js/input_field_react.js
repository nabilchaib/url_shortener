import React, { useState } from 'react';
import axios from 'axios';

const InputField = () => {
  const [longUrl, setLongUrl] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!longUrl) {
      setError('Please enter a URL');
    } else if (!isValidUrl(longUrl)) {
      setError('Invalid URL, please enter a valid URL');
    } else {
      setError('');
      shortenUrl();
    }
  };
    
  // Helper function to check if the URL is valid
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  const shortenUrl = async () => {
    try {
      // console.log('patates');
      const response = await axios.post('/api/shorten', { longUrl });
      // console.log('patates');
      const shortUrl = response.data.shortUrl;
      console.log(shortUrl); // Output the shortened URL to the console
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="long-url">Enter the URL you want to shorten:</label>
      <input
        type="text"
        id="long-url"
        value={longUrl}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Shorten URL</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default InputField;
