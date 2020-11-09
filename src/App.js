import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState();

  const getApi = async () => {
    try {
      const result = await fetch('http://localhost:5001');
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
