import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useEffect, useState, useRef } from "react";

// import app from "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
  const btnRef = useRef(0);
  const [showBtn, setshowBtn] = useState(true);
  useEffect(() => {
    // alert("Count was changed!");
  }, [count]);

  useEffect(() => {
    // alert("I am here");
    btnRef.current = btnRef.current + 1;
    console.log(btnRef.current);
    // btnRef.current.style.backgroundColor="pink"
  });

  return (
    <>
      <Navbar color={"I am color number: " + color} />
      <div className="cards">
        <Card title="Card-1" des="I am Card number 1" />
        <Card title="Card-2" des="I am Card number 2" />
        <Card title="Card-3" des="I am Card number 3" />
        <Card title="Card-4" des="I am Card number 4" />
      </div>
      <button 
        onClick={() => {
          setCount(count + 1);
          setColor((color) => color + 1);
          setshowBtn(!showBtn)
        }}
      >
        Count is {count} and click me to change behaviour of other button
      </button>
      <p></p>
      {/* {showBtn && <button>I am visible becasue button was clicked</button>} */}
      {showBtn?<button>I am true</button>:<button>I am false</button>}
      <Footer />
    </>
  );
}

export default App;
