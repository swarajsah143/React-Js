import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";


function App() {
  const [cards, setCards] = useState([]);
  const getData = async () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(URL);
    let data = await response.json();
    setCards(data);
    console.log(data);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
    // getData()  We can do like this also without creating other async
  }, []);
  return (
    <>
    <Navbar/>

      <div className="container">
        {cards.map((card) => {
           return<div className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By User: {card.userId}</span>
          </div>;
        })}
      </div>
    </>
  );
}

export default App;
