import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [cards, setCards] = useState([]);
  // const [change, setChange] = useState("");
  const [form, setForm] = useState({})
  // const [updateContent, setUpdateContent] = useState('')
  const handleTouch = () => {
    alert("I am in");
  };
  const handleClick = () => {
    alert("I got clciked");
    // setUpdateContent(change)

  };
  const handleChange = (e) => {
    //  setChange(form.Name);
     setForm({...form,[e.target.name]:e.target.value})


    // console.log(e.target.value)
    
  };
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
      <Navbar />
      <div className="touchme" onMouseOver={handleTouch}>
      {/* {updateContent} */} I am div,touch me to alert
      </div>
      <button onClick={handleClick}>Click me to update</button>
      <br />
      <input type="text" name="Name" value={form.Name?form.Name:"Name:"} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone?form.phone:"Phone:"} onChange={handleChange} />

      <div className="container">
        {cards.map((card) => {
          // here card means mappeed array one by one, this can be any variable
          return (
            <div className="card">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
              <span>By User: {card.userId}</span>
            </div>
          );
          // if we use {} inside arrow funt then we have to use return()
        })}
      </div>
    </>
  );
}

export default App;
