import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState();

  const getApi = async () => {
    try {
      //this url does not work
      const result = await fetch('http://my_api:3000');
      const data = await result.json();
      setResult(data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className='App'>
      {result ? (
        <p>
          {result.name}, {result.message}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
