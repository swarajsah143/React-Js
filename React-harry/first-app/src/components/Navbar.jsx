import {useEffect}from "react";
import React from "react";
import "./Navbar.css";

const Navbar = ({color}) => {


  useEffect(()=>{
    // alert("I run on every reinder")
  })
  useEffect(()=>{
    // alert("I am a first reinder only")
  },[])
  useEffect(()=>{
    // alert("Color was changed!")
  },[color])
  useEffect(()=>{
    return()=>{
      // alert("Navbar was unmounted")
    }/* This can also work even the component is removed from the App.jsx */
  },[])

  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <p>{color}</p>

    </div>
  );
};

export default Navbar;
