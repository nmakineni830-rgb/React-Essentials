import './App.css'
import { useEffect, useState } from 'react';
import { Data } from './Data';

function App() {
  const [data, setData] = useState(null);

  async function jsonData() {
    let res = await fetch("https://dummyjson.com/products");
    let response = await res.json();
    setData(response);
  }

  useEffect(() => {
    jsonData();
  }, [])
  console.log(data)
  return (
    <>
      <Data data={data} />
    </>
  )
}
export default App