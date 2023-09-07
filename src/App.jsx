import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ["Shakib Khan", "Shoriful Raj", "Jashim", "Rubel"];

  const book = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Biology", price: 150 },
    { id: 3, name: "Chemistry", price: 250 },
    { id: 4, name: "Math", price: 300 },
    { id: 5, name: "English", price: 500 },
  ];

  const singers = [
    { id: 1, name: "Tasrif Khan", age: 25 },
    { id: 2, name: "Konal", age: 30 },
    { id: 3, name: "Imran Khan", age: 32 },
    { id: 4, name: "Shuvro Dev", age: 58 },
    { id: 5, name: "Darshan Raval", age: 50 },
    { id: 6, name: "Pritam Hasan", age: 30 },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={book}></BookStore>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task={"learn React"} isDone={false}></Todo>
      <Todo task={"learn JS"} isDone={true}></Todo>
      <Todo task={"try JSX"} isDone={false}></Todo>
      <Todo task={"learn Redux."} isDone={false}></Todo> */}
      {/* <Device name="Laptop" price={16000}></Device>
      <Device name="Mobile" price={16990}></Device>
      <Device name="Watch" price={2300}></Device>
      <Device name="TV" price={1000}></Device>
      <Student name="Sabbir Howlader" age="17" grade="12" score="85"></Student>
      <Student name="Siam" age="12" grade="6" score="90"></Student>
      <Student name="Khadija Akter" age="10" grade="4" score="98"></Student>
      <Student></Student>
      <Person></Person>
      <Developer></Developer> */}
    </>
  );
}
function Device(props) {
  // console.log(props)
  return (
    <h2>
      This Is Device: {props.name}, price: {props.price}
    </h2>
  );
}
function Student({
  name = "unknown",
  age = "no data for this",
  grade = "we don't have much data for this user",
  score = "unavailable",
}) {
  // console.log(props)
  return (
    <div
      style={{
        border: "3px solid green",
        padding: "10px",
        margin: "10px",
        borderRadius: "15px",
      }}
    >
      <h2>This Is Student: {name}</h2>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}
function Person() {
  const person = { Name: "John", Age: "22" };
  return (
    <h3>
      I am {person.Name}. I am {person.Age} years old.
    </h3>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "3px solid yellow",
    borderRadius: "15px",
  };
  return (
    <div style={developerStyle}>
      <h3>Devo devo</h3>
      <p>Coding:</p>
    </div>
  );
}
export default App;
