import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './components/useEfffect';
function App() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  //     .catch((error) => {console.log(error)

  //     });
  //     // console.log(data);  
  //   });
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const [data] = useFetch(url);
  return (
    <>
      <div>
        <h2>{data && data.title}</h2>
      </div>
    </>
  )
}

export default App
